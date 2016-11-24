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
    };



    //dom ready
    $(document).ready(function(){


        var myfurla = new furla();
        myfurla.init();


    });


})();

