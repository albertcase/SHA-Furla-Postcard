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
        var animateImgArr = [];
        for(var k=0;k<50;k++){
            animateImgArr.push(baseurl+'animate/L_000'+(44+k)+'.jpg');
        }
        imagesArray = imagesArray.concat(animateImgArr);
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
                $('.box-animate').addClass('fade');
                $('.preload').remove();
                //self.openGift();
                self.showLetter();
                //self.prize();

            }
        });

    };

    //open page
    gift.prototype.openGift = function(){
        var self = this;
        Common.gotoPin(0);
        //imulate shake function
        $('.pg1-t1').on('touchstart',function(){
            openBox();
        });
        //openBox();
        //showLetter();

        function openBox(){
            //$('.box-top').addClass('open');
            //$('.pg1-t2').removeClass('hide');
            //loadAni();
        //    api
            loadAni();
            var inputName = $('#input-name-1');
            var textConEle = $('#l-content');
            var inputName2 = $('#input-name-2');
            var dbEle = $('.dest-block');
            var dateEle = $('.letter-date');
            Api.getLetter({data:'dkdkdk'},function(data){
                console.log(data);
                if(data.code==1){
                    var newdata = data.msg;
                    var dbHtml='';
                    var j=0;
                    for(var i=0;i<products.length;i++){
                      if((products[i].pid == newdata.choose1)||(products[i].pid == newdata.choose2)||(products[i].pid == newdata.choose3)){
                          dbHtml = dbHtml+'<div class="item item-dest item-'+j+'"><img src="'+products[i].imgsrc+'" alt=""/></div>';
                      }
                    };
                    dbEle.html(dbHtml);
                    inputName.val(newdata.touser).attr('disabled','true');
                    inputName2.val(newdata.fromuser).attr('disabled','true');
                    textConEle.val(newdata.wish).attr('disabled','true');
                    dateEle.html(newdata.date);
                }
            });
        //    load products
            console.log('加载并显示产品');


        }

        function loadAni(){
            var j = 44;
            var reqAnimateNow = new reqAnimate($('.box-animate img')[0],{
                fps: 30,
                //totalFrames: 50,
                time: Infinity,
                processAnimation: function(){
                    var imgName ="/dist/images/animate/L_000"+j+".jpg";
                    j++;
                    $('.box-animate img').attr('src',imgName);
                    if(j>93){
                        reqAnimateNow.cancel();
                        //show box and letter
                        $('.box-animate').addClass('fadeout').remove(1000);
                        $('.box-bottom').addClass('fade');
                    }
                },
                doneAnimation: function(){
                    console.log('456');
                }
            });
            reqAnimateNow.start();
        };

        //find the letter card ,and then show
        $('.dest-block').on('touchstart',function(){
            self.showLetter();
        });
    };

    gift.prototype.showLetter = function(){
        var self = this;
        $('.card').addClass('goright');
        $('.section-letter').removeClass('hide');
        Common.gotoPin(1);

        var isprize = false;
        $('.btn-postcard').on('touchstart',function(){
            Api.giftLottery(function(data){
                if(data.code==1){
                    isprize = true;
                    self.prize(isprize);
                }else if(data.code==2){
                    isprize = false;
                    self.prize(isprize);
                }else{
                    alert(data.msg);
                }
            });
        });
    };
    //prize page
    gift.prototype.prize = function(isprize){
        var self = this;
        Common.gotoPin(2);
        $('.box-animate').remove();
        if(isprize){
            $('.replace-text').removeClass('rt-2').addClass('rt-1');
            $('.replace-text img').attr('src','/dist/images/text-key-1.png');
        }else{
            $('.replace-text').removeClass('rt-1').addClass('rt-2');
            $('.replace-text img').attr('src','/dist/images/text-prize-4.png');
            //我也要送好礼祝福
            $('.btn-goform span').html('我也要送好礼祝福');
        }
        //有两种情况，中奖的话就是go form page
        //未中奖就是再送一次祝福 go index page
        $('.btn-goform').on('touchstart',function(){
           if(isprize){
               Common.goFormPage();
           }else{
               Common.goHomePage();
           }
        });

    };




    //dom ready
    $(document).ready(function(){

        var myfurla = new gift();
        myfurla.init();


    });


})();

