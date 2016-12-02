;(function(){

    var weixinshare = function(obj,callback){
        //open debug
        //wx.config({
        //    debug:true
        //});
        wx.ready(function(){
            wx.onMenuShareAppMessage({
                title: obj.title1,
                desc: obj.des,
                link: obj.link,
                imgUrl: obj.img,
                type: '',
                dataUrl: '',
                success: function () {
                    callback();

                },
                cancel: function () {
                    callback();
                }
            });
            wx.onMenuShareTimeline({
                title: obj.title1,
                link: obj.link,
                imgUrl: obj.img,
                success: function () {
                    console.log('share success to timeline');
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
    //weixinshare({
    //    title1: 'FURLA 为您准备了一份圣诞惊喜！请点击查收。',
    //    des: '即刻参加圣诞活动，赢取惊喜好礼',
    //    link: window.location.origin,
    //    img: 'http://furlasparklesofjoy.samesamechina.com/dist/images/share.jpg'
    //},function(){
    //    console.log('nothing')
    //});
});
