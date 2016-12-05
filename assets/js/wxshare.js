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
                    _hmt.push(['_trackEvent', 'btn-weixin', 'share', 'success']);
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
                    _hmt.push(['_trackEvent', 'btn-weixin', 'share', 'success']);
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
        title1: '闪耀圣诞，FURLA邀您一起分享喜悦',
        des: '当圣诞心情已浸入每一个细胞，这份欢乐而喜悦的情绪需要与你一同分享！这个圣诞，让我们寄情于礼，分享FURLA所带来的温馨闪耀吧。',
        link: 'http://furlasparklesofjoy.samesamechina.com',
        img: 'http://furlasparklesofjoy.samesamechina.com/dist/images/share.jpg'
    },function(){

    });
});
