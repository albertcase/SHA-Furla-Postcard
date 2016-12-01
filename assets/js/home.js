;(function(){

    var furla = function(){

    };
    //init
    furla.prototype.init = function(){
        var self = this;
        //    loading first
        var baseurl = '/dist/images/';
        var imagesArray = [
            baseurl + 'bg.jpg',
            baseurl + 'bg-layer-1.png',
            baseurl + 'bg-layer-2.png',
            baseurl + 'logo.png',
            baseurl + 'p1-t1.png',
            baseurl + 'box-top.png',
            baseurl + 'box-bottom.jpg',
            baseurl + 'line.png',
            baseurl + 'p2-t1.png',
            baseurl + 'p2-t2.png',
            baseurl + 'p2-t3.png',
            baseurl + 'p2-t4.png',
            baseurl + 'text-click-right.png',
            baseurl + 'text-prize-1.png',
            baseurl + 'text-prize-2.png',
            baseurl + 'text-prize-4.png',
            baseurl + 'lottery-t1.png',
        ];
        var i = 0;
        new preLoader(imagesArray, {
            onProgress: function(){
                i++;
                var progress = parseInt(i/imagesArray.length*100);
                $('.preload .v-content').html('已加载'+progress+'%');
            },
            onComplete: function(){
                //
                $('.container').addClass('fade');
                self.welcomePage();
                $('.preload').remove();
            }
        });

        //self.writeCard();
        //self.shareCallback();
    };
    //welcome page
    furla.prototype.welcomePage = function(){
        var self = this;
        Common.gotoPin(0);

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
            lazyLoading: true,
            loop:true
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
                //console.log('开始添加');
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
                //console.log('开始移除');
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
                //console.log('move移除');
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
                self.writeCard(selectedProducts);
            }else{
                //console.log('请选择三个产品');
            }

        };

        $('.btn-writecard').on('touchstart',submitSelectedProduct);

    };

    //write card with words
    furla.prototype.writeCard = function(products){
        var self = this;

        var selectedPro = products?products:[0,0,0];
        Common.gotoPin(2);
        $('.bg .bg-layer-1').addClass('bg-right');

        //    update date
        var curDate = new Date();
        var y = curDate.getFullYear(),
            m=curDate.getMonth()+1,
            d=curDate.getDate();
        var curDay = y+'年'+m+'月'+d+'日';
        $('.letter-date').html(curDay);

        var letterContent = $('#l-content');
        var startFocus = false; //if focus first,all init text need disappear
        var initVal = 'FURLA全新系列带着我最深刻的祝福，\n用绽放的星芒，\n为您装点一个绚烂的惊喜。';
        var curVal;
        letterContent.val(initVal);
        letterContent.on('focus',function(){
            if(!startFocus){
                letterContent.val('');
            }
            startFocus = true;
        });

        //function charLimit(limitField, limitCount, limitNum) {
        //    if (limitField.value.length > limitNum) {
        //        limitField.value = limitField.value.substring(0, limitNum);
        //    } else {
        //        limitCount.value = limitNum - limitField.value.length;
        //    }
        //};

        letterContent.on('keydown',function(e){
            curVal = letterContent.val();
            if(e.keyCode==13 || e.which==13){
                var a = curVal.split('\n');
                if(a.length>2){
                    return false;
                }
            }
        });

        //send product and words to backend
        $('.btn-postcard').on('touchstart',function(){
            curVal = letterContent.val();
            /*here*/
            var toUserVal = $('#input-name-1').val();
            var fromuser = $('#input-name-2').val();
            Api.saveCard({
                //choose1  choose2  choose3  wish touser fromuser
                choose1:selectedPro[0],
                choose2:selectedPro[1],
                choose3:selectedPro[2],
                wish:curVal,
                touser:toUserVal,
                fromuser:fromuser

            },function(data){

                if(data.code==1){
                    //    submit success,do animation
                    doAniForLetter();
                    //    start to activate
                    var cardId = data.msg;
                    //console.log('激活分享');
                    weixinshare({
                        title1: '激活分享',
                        des: '激活分享',
                        link: window.location.origin+'/gift.html?carid='+cardId,
                        img: '/dist/images/share.jpg'
                    });
                    return;
                }

                if(data.code !==1){
                    alert(data.msg);
                }

            });


        });
        function doAniForLetter(){
            $('.section-letter').addClass('shrinktocorner');
            $('.box-top').addClass('movetocenter');
        };

        $('.p3-t1').on('touchstart',function(){
            self.shareCallback();

        });


    };

    //share callback
    furla.prototype.shareCallback = function(){
        var self = this;
    //  go pin-4
        Common.gotoPin(3);
    //    lucky draw success
    //    api
        self.cardLottery();


    };

    furla.prototype.cardLottery = function(){
        /*
        * 这个按钮有三个功能，分别是’开始抽奖‘，‘领取卡券’，‘再次送祝福（刷新重载功能）’
        * */

        //立即抽奖
        var isGetCoupon = false; /*是否获取卡券*/
        var isAgain = false;/*是否送祝福*/
        $('.btn-cardlottery').on('touchstart',function(){
            if(!isGetCoupon && !isAgain){
                //卡券抽奖
                Api.cardLottery(function(data){
                    //console.log(data);
                    if(data.code==1){
                        //    中奖
                        $('.replace-text img').attr('src','/dist/images/text-prize-1.png');
                        $('.replace-text').removeClass('rt-1').addClass('rt-2');
                        $('.btn-cardlottery span').html('点击领取卡券');
                        $('.btn-cardlottery').parent().append('<div class="btn btn-again"><span>再送一次好礼祝福</span></div>');
                        isGetCoupon = true;
                        return;
                    }

                    if(data.code == 2){
                        //    未中奖
                        $('.replace-text img').attr('src','/dist/images/text-prize-2.png');
                        $('.replace-text').removeClass('rt-1').addClass('rt-3');
                        $('.btn-cardlottery span').html('再送一次好礼祝福');
                        isAgain = true;
                        return;
                    }

                    //other status
                    alert(data.msg);

                });

                return; //如果已经抽奖，不继续
            }

            if(isGetCoupon){
                //领取卡券
                Api.getCoupon(function(data){
                    //console.log(data);

                });
                return;
            }

            if(isAgain){
                window.location.reload();
            }


        });

    //
        $('.pin-4').on('touchstart','.btn-again',function(){
            window.location.reload();
        });


    };





    //dom ready
    $(document).ready(function(){

        var myfurla = new furla();
        myfurla.init();


    });


})();

