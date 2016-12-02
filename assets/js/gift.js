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
                self.openGift();
                //self.showLetter();
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

        //shake
        var giftShake = new Shake({
            threshold: 15, //default velocity threshold for shake to register
            timeout: 1000
        });
        giftShake.start();
        window.addEventListener('shake', shakeEventDidOccur, false);
        //function to call when shake occurs
        function shakeEventDidOccur () {
            openBox();
            //stop shake
            giftShake.stop();
        }

        function openBox(){
        //    api
            loadAni();
            var inputName = $('#input-name-1');
            var textConEle = $('#l-content');
            var inputName2 = $('#input-name-2');
            var dbEle = $('.dest-block');
            var dateEle = $('.letter-date');
            var curCardId = Common.getParameterByName('cardid');
            Api.getLetter({id:curCardId},function(data){
                if(data.status==1){
                    var newdata = data.msg;
                    var dbHtml='';
                    for(var i=0;i<products.length;i++){
                        if(products[i].pid == newdata.choose1){
                            dbHtml = dbHtml+'<div class="item item-dest item-1"><img src="'+products[i].imgsrc+'" alt=""/></div>';
                        };
                        if(products[i].pid == newdata.choose2){
                            dbHtml = dbHtml+'<div class="item item-dest item-2"><img src="'+products[i].imgsrc+'" alt=""/></div>';
                        };
                        if(products[i].pid == newdata.choose3){
                            dbHtml = dbHtml+'<div class="item item-dest item-3"><img src="'+products[i].imgsrc+'" alt=""/></div>';
                        };

                    };
                    dbEle.html(dbHtml);
                    inputName.val(newdata.touser).attr('disabled','true');
                    inputName2.val(newdata.fromuser).attr('disabled','true');
                    textConEle.val(newdata.wish).attr('disabled','true');
                    dateEle.html(newdata.date);
                }
            });

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
        var aaa = setTimeout(function(){
            Common.gotoPin(1);
            clearTimeout(aaa);
        },1000);

        var bbb = setTimeout(function(){
            $('.section-letter').addClass('change');
            clearTimeout(bbb);
        },2000);

        var isprize = false;
        var curCardId = Common.getParameterByName('cardid');
        $('.btn-postcard').on('touchstart',function(){
            Api.giftLottery({
              id:curCardId
            },function(data){
                if(data.status==1){
                    isprize = true;
                    self.prize(isprize);
                }else if(data.status==2){
                    isprize = false;
                    self.prize(isprize);
                }else{
                    Common.alertBox.add(data.msg);
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

