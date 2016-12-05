;(function(){

    var weixinshare = function(obj,callback){
        wx.ready(function(){
            wx.onMenuShareAppMessage({
                title: obj.title1,
                desc: obj.des,
                link: obj.link,
                imgUrl: obj.img,
                type: '',
                dataUrl: '',
                success: function () {
                    //    success
                    _hmt.push(['_trackEvent', 'wxshare', 'share', 'share']);
                    callback();

                },
                cancel: function () {
                }
            });
            wx.onMenuShareTimeline({
                title: obj.title1,
                link: obj.link,
                imgUrl: obj.img,
                success: function () {
                    callback();
                },
                cancel: function () {

                }
            });


        })
    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return weixinshare;
        });
    }
    else {
        this.weixinshare = weixinshare;
    }

}).call(this);

$(document).ready(function(){
    weixinshare({
        title1: 'FURLA 为您准备了一份圣诞惊喜！请点击查收。',
        des: '闪耀而温馨的圣诞节即将来临，查收节日惊喜，送出您最真挚的祝福。 ',
        link: 'http://furlasparklesofjoy.samesamechina.com',
        img: 'http://furlasparklesofjoy.samesamechina.com/dist/images/share.jpg'
    },function(){

    });
});
