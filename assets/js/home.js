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
        //load select product page
        //$('.pin-1').on('touchstart',function(){
        //    console.log(1);
        //    Common.gotoPin(1);
        //    self.selectProductPage();
        //});

        Common.gotoPin(1);
        self.selectProductPage();

    };

    //select product page
    furla.prototype.selectProductPage = function(){
        var self = this;
        var swiperHtml = '';
        for(var i=0;i<products.length;i++){
            swiperHtml = swiperHtml + '<div class="swiper-slide">'+
                '<div class="item-content">'+
                '<div class="slide-block" pid="100">'+
                '<img src="/dist/images/products/p1.png" alt=""/>'+
                '</div>'+
                '</div><div class="product-name">FURLA_METROPOLIS MINI CROSSBODY</div>'+
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
        var isMoved = false;

        var dragEle = $('.drag-ele');
        var destEle = $('.dest-block');

        var enableMove = true;

        var productNo = 0;
        var curPid;

        var selectedProducts = [];

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

        function addProducts(){


        };

        function removeProducts(index){
            //selectedProducts
            selectedProducts.splice(index,1,'undefied');
        };


        /*touch start function*/
        function handlerDragTS(e){
            //console.log(e);
            enableMove = true;
            minX = destEle.offset().left;
            minY = destEle.offset().top;
            maxX = minX + parseInt(destEle.width());
            maxY = minY + parseInt(destEle.height());
            x = e.changedTouches[0].clientX;
            y = e.changedTouches[0].clientY;

            //add products
            if($(e.target).parent().hasClass('slide-block') && $(e.target).parent().parent().parent().hasClass('swiper-slide-next')){
                curPid = $(e.target).parent().attr('pid');
                dragEle.css({
                    'opacity':'0',
                    'left':x + 'px',
                    'top':y + 'px'
                });
                dragEle.html($(e.target).parent().parent().html());
                isAddProduct = true;
            };

            if($(e.target).parent().hasClass('slide-block') && $(e.target).parent().parent().hasClass('item-dest')){
                curPid = $(e.target).parent().attr('pid');
                dragEle.css({
                    'opacity':'0',
                    'left':x + 'px',
                    'top':y + 'px'
                });
                dragEle.html($(e.target).parent().parent().html());
                isRemoveProduct = true;
            };




            ////remove products
            //if($(e.target).parent().hasClass('slide-block')&&($(e.target).parent().parent().hasClass('item-dest'))){
            //    console.log('start remove');
            //    curPid = $(e.target).parent().attr('pid');
            //}

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
                var dHtml = dragEle.html();
                if(isBelongDest(e.changedTouches[0].clientX,e.changedTouches[0].clientY,minX,minY,maxX,maxY)){
                    if(!enableMove) return;
                    enableMove = false;
                    if(productNo>2) return;
                    selectedProducts.push(curPid);
                    $('.dest-block .item').eq(productNo).html(dHtml);
                    resetDragElePos(dragEle);
                    productNo++;
                    console.log(productNo);
                }else{


                }
            }

            if(isRemoveProduct){
                dragEle.css({
                    'opacity':'1',
                    left:e.changedTouches[0].clientX + 'px',
                    top:e.changedTouches[0].clientY + 'px'
                });
                //var dHtml = dragEle.html();
                if(isBelongDest(e.changedTouches[0].clientX,e.changedTouches[0].clientY,minX,minY,maxX,maxY)){

                }else{

                    resetDragElePos(dragEle);
                    $('.item-dest').eq(0).find('.slide-block').remove();
                    removeProducts(0);
                    console.log(selectedProducts);

                }
            }


            //remove products
            //if($(e.target).parent().hasClass('slide-block')&&($(e.target).parent().parent().hasClass('item-dest'))){
            //    console.log('start remove');
            //    curPid = $(e.target).parent().attr('pid');
            //}
            //if(e.changedTouches[0].clientY>300){
            //
            //    $('.dest-block .item-1').html(dHtml);
            //    dragEle.css('opacity','0');
            //
            //}

        };

        /*touch end function*/
        function handlerDragTE(e){
            isAddProduct = false;
            isRemoveProduct = false;
            //console.log(e);
            if(!isMoved){
                resetDragElePos(dragEle);
            }
        };


        $('.drag-panel').on('touchstart',handlerDragTS);
        $('.drag-panel').on('touchmove',handlerDragTM);
        $('.drag-panel').on('touchend',handlerDragTE);

    };




    //dom ready
    $(document).ready(function(){


        var myfurla = new furla();
        myfurla.init();


    });


})();

