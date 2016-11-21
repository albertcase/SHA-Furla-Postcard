;(function(){


$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });


//    drag-block
    var point, x, y,dx,dy;

    function handlerDragTS(e){
        console.log(e);
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY;
        $('.drag-pain').css('z-index','100');
        $('.drag-pain').html($(this).html());

    };
    function handlerDragTM(e){
        console.log(e);
        dx = e.changedTouches[0].clientX - x;
        dy = e.changedTouches[0].clientY - y;
    //    update position
        $(this).css({
            left:dx + 'px',
            top:dy + 'px'
        })

    };
    function handlerDragTE(e){
        console.log(e);


    };

    $('.item-content').on('touchstart',handlerDragTS);
    $('.drag-pain').on('touchmove',handlerDragTM);
    $('.drag-pain').on('touchend',handlerDragTE);


});


})();