;(function(){

    var gift = function(){

    };
    //init
    gift.prototype.init = function(){
        var self = this;
        var baseurl = '/dist/images/';
        var imagesArray = [
            baseurl + 'bg.jpg',
            baseurl + 'bg-layer-1.png',
            baseurl + 'bg-layer-2.png',
            baseurl + 'logo.png',
            baseurl + 'box-top.png',
            baseurl + 'box-bottom.jpg',
            baseurl + 'line.png',
            baseurl + 'card.png',
            baseurl + 'p2-t3.png',
            baseurl + 'p2-t4.png',
            baseurl + 't-open.png',
            baseurl + 'text-3.png',
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
                self.openGift();
                $('.preload').remove();
            }
        });

    };

    //open page
    gift.prototype.openGift = function(){
        //imulate shake function
        $('.box-top').on('touchstart',function(){
            openBox();
        });
        //openBox();
        //showLetter();

        function openBox(){
            $('.box-top').addClass('open');
            $('.pg1-t2').removeClass('hide');
        //    api
            Api.getLetter({data:'dkdkdk'},function(){
                
            });
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

