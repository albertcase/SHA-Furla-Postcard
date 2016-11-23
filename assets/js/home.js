;(function(){


$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
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
    //console.log(getElementTop(destEle[0]));
    minX = getElementLeft(destEle[0]);
    minY = getElementTop(destEle[0]);
    maxX = minX + parseInt(destEle.width());
    maxY = minY + parseInt(destEle.height());

    var enableMove = true;

    var productNo = 0;
    var curPid;

    var selectedProducts = [];

    var isProduct = false;
    console.log('minx'+minX+'minY'+minY+'maxX'+maxX+'maxY'+maxY);

    function resetDragElePos(ele){
        ele.css({
            'opacity':'0',
            'left':0,
            'top':0,
            'z-index':'-1'
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

    function removeProducts(){

    };


    /*touch start function*/
    function handlerDragTS(e){
        //console.log(e);
        enableMove = true;
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY;

        //add products
        if($(e.target).parent().hasClass('slide-block') && $(e.target).parent().parent().hasClass('item-content')){

            dragEle.css({
                'opacity':'0',
                'left':x + 'px',
                'top':y + 'px'
            });
            dragEle.html($(e.target).parent().parent().html());
            isProduct = true;
        };
    };


    /*touch move function*/
    function handlerDragTM(e){
    //    console.log(e);
        dx = e.changedTouches[0].clientX - x;
        dy = e.changedTouches[0].clientY - y;
        if(isProduct){
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
                $('.dest-block .item').eq(productNo).html(dHtml);
                resetDragElePos(dragEle);
                productNo++;
                console.log(productNo);
            }else{

            }
        }


        //if(e.changedTouches[0].clientY>300){
        //
        //    $('.dest-block .item-1').html(dHtml);
        //    dragEle.css('opacity','0');
        //
        //}

    };

    /*touch end function*/
    function handlerDragTE(e){
        isProduct = false;
        //console.log(e);
        if(!isMoved){
            resetDragElePos(dragEle);
        }
    };


    $('.drag-panel').on('touchstart',handlerDragTS);
    $('.drag-panel').on('touchmove',handlerDragTM);
    $('.drag-panel').on('touchend',handlerDragTE);


});


})();