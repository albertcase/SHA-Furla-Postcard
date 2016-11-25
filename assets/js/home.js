;(function(){

    var furla = function(){

    };
    //init
    furla.prototype.init = function(){
        var self = this;
        self.welcomePage();
    };
    //welcome page
    furla.prototype.welcomePage = function(){
        var self = this;

        Common.gotoPin(0);
        self.selectProductPage();

        //popup for rule
        $('.show-rule').on('click',function(){
            $('#popup-rule').addClass('show');
        });
        $('#popup-rule .btn-close').on('click',function(){
            $('#popup-rule').removeClass('show');
        });

        //go select product page
        $('.arrow-next').on('touchstart',function(){
            self.selectProductPage();
        });

    };

    //select product page
    furla.prototype.selectProductPage = function(){
        var self = this;
        var swiperHtml = '';
        Common.gotoPin(1);
        for(var i=0;i<products.length;i++){
            swiperHtml = swiperHtml + '<div class="swiper-slide">'+
                '<div class="item-content">'+
                '<div class="slide-block" pid="'+products[i].pid+'">'+
                '<img src="'+products[i].imgsrc+'" alt=""/>'+
                '</div>'+
                '</div><div class="product-name">'+products[i].name+'</div>'+
                '</div>';
        }

        $('.swiper-wrapper').html(swiperHtml);
        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // Disable preloading of all images
            preloadImages: false,
            slidesPerView: 3,
            // Enable lazy loading
            lazyLoading: true
        });

        /*
         * The function is to drag slide products to destionation area
         *
         * */
        function getElementLeft(element){
            var actualLeft = element.offsetLeft;
            var current = element.offsetParent;
            while (current !== null){
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }
            return actualLeft;
        }

        function getElementTop(element){
            var actualTop = element.offsetTop;
            var current = element.offsetParent;

            while (current !== null){
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            return actualTop;
        }

//    drag-block
        var point, x, y,dx,dy;

        var maxX,maxY,minX,minY;

        /*If move the product success,true*/
        //var isMoved = false;

        var dragEle = $('.drag-ele');
        var destEle = $('.dest-block');

        var enableMove = true;

        var curPid;
        var curIndex;
        var isFull = false;

        var addHtml;
        var selectedProducts = ['','',''];

        var isAddProduct = false,
            isRemoveProduct = false;

        function resetDragElePos(ele){
            ele.css({
                'opacity':'0',
                'left':'-3rem',
                'top':'-1.8rem',
                //'z-index':'-1'
            }).html('');
        };

        /*If the drag elements is in destination block*/
        function isBelongDest(posX,posY,minX,minY,maxX,maxY){
            if( posX < minX || posX > maxX || posY < minY || posY > maxY){
                //    not belong
                return false;
            }
            return true;
        }

        function changeStatus(ischange){
            if(ischange){
                $('.btn-writecard').removeClass('hide');
                $('.p2-t1 img').attr('src','/dist/images/p2-t2.png');
            }else{
                $('.btn-writecard').addClass('hide');
                $('.p2-t1 img').attr('src','/dist/images/p2-t1.png');
            }

        };


        function addProducts(){
            console.log('添加中。。。');
            for(var i=0;i<selectedProducts.length;i++){
                if(!selectedProducts[i]){
                    selectedProducts[i] = curPid;
                    $('.dest-block .item').eq(i).html(addHtml);
                    resetDragElePos(dragEle);
                    if(i==2){
                        isFull = true;
                        changeStatus(true);
                    }
                    return;
                }
            }


        };


        function removeProducts(index){

            console.log('移除中。。。');
            //selectedProducts
            $('.item-dest').eq(index).find('.slide-block').remove();
            selectedProducts.splice(index,1,'');
            isFull = false;
            changeStatus(false);
        };



        /*touch start function*/
        function handlerDragTS(e){
            enableMove = true;
            minX = destEle.offset().left;
            minY = destEle.offset().top;
            maxX = minX + parseInt(destEle.width());
            maxY = minY + parseInt(destEle.height());
            x = e.changedTouches[0].clientX;
            y = e.changedTouches[0].clientY;

            //add products
            if($(e.target).parent().hasClass('slide-block') && $(e.target).parent().parent().parent().hasClass('swiper-slide-next') && !isFull){
                console.log('开始添加');
                curPid = $(e.target).parent().attr('pid');
                addHtml = $(e.target).parent().parent().html();
                dragEle.css({
                    'opacity':'0',
                    'left':x + 'px',
                    'top':y + 'px'
                });
                dragEle.html(addHtml);
                isAddProduct = true;
                isRemoveProduct = false;
            };

            if($(e.target).parent().hasClass('slide-block') && $(e.target).parent().parent().hasClass('item-dest')){
                console.log('开始移除');
                curPid = $(e.target).parent().attr('pid');
                curIndex = $(e.target).parent().parent().index();
                dragEle.css({
                    'opacity':'0',
                    'left':x + 'px',
                    'top':y + 'px'
                });
                dragEle.html($(e.target).parent().parent().html());
                isAddProduct = false;
                isRemoveProduct = true;
            };

        };


        /*touch move function*/
        function handlerDragTM(e){
            dx = e.changedTouches[0].clientX - x;
            dy = e.changedTouches[0].clientY - y;
            if(isAddProduct){
                dragEle.css({
                    'opacity':'1',
                    left:e.changedTouches[0].clientX + 'px',
                    top:e.changedTouches[0].clientY + 'px'
                });

                if(isBelongDest(e.changedTouches[0].clientX,e.changedTouches[0].clientY,minX,minY,maxX,maxY)){
                    if(!enableMove) return;
                    enableMove = false;
                    addProducts();
                }
            }
            if(isRemoveProduct){
                console.log('move移除');
                dragEle.css({
                    'opacity':'1',
                    left:e.changedTouches[0].clientX + 'px',
                    top:e.changedTouches[0].clientY + 'px'
                });
                //var dHtml = dragEle.html();
                if(isBelongDest(e.changedTouches[0].clientX,e.changedTouches[0].clientY,minX,minY,maxX,maxY)){

                }else{
                    if(!enableMove) return;
                    enableMove = false;
                    resetDragElePos(dragEle);
                    removeProducts(curIndex);
                }
            }


        };

        /*touch end function*/
        function handlerDragTE(e){
            isAddProduct = false;
            isRemoveProduct = false;
            curIndex='';
            addHtml = '';
            resetDragElePos(dragEle);
        };


        $('.drag-panel').on('touchstart',handlerDragTS);
        $('.drag-panel').on('touchmove',handlerDragTM);
        $('.drag-panel').on('touchend',handlerDragTE);


        function submitSelectedProduct(){
            if(isFull){
                //接口1
                console.log(selectedProducts);
                console.log('submit selected products id');
            }else{
                console.log('请选择三个产品');
            }

        };

        $('.btn-writecard').on('touchstart',submitSelectedProduct);

    };




    //dom ready
    $(document).ready(function(){


        var myfurla = new furla();
        myfurla.init();


    });


})();

