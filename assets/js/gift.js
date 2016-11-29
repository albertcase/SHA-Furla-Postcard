;(function(){

    var gift = function(){

    };
    //init
    gift.prototype.init = function(){
        var self = this;
        self.openGift();
    };

    //open page
    gift.prototype.openGift = function(){
        //imulate shake function
        $('.box-top').on('touchstart',function(){
            openBox();
        });
        openBox();
        showLetter();

        function openBox(){
            $('.box-top').addClass('open');
            $('.pg1-t2').removeClass('hide');
        //    api
        //    load products
            console.log('加载并显示产品');
        }

        //find the letter card ,and then show
        $('.dest-block').on('touchstart',function(){
            showLetter();
        });

        function showLetter(){
            $('.card').addClass('goright');
            $('.section-letter').removeClass('hide');
            console.log('api for 信纸内容');
        }
    };




    //dom ready
    $(document).ready(function(){

        var myfurla = new gift();
        myfurla.init();


    });


})();

