/*All the api collection*/
Api = {
    //保存贺卡
    //choose1  choose2  choose3  wish touser fromuser
    saveCard:function(obj,callback){
        $.ajax({
            url:'/api/savecard',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);

                //code=1    msg = 贺卡id
            }
        });

        //return callback({
        //    code:1
        //})


    },
    //查询贺卡
    //参数  id

    getLetter:function(obj,callback){
        $.ajax({
            url:'/api/loadcard',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
                //data:gift
                //gift=1抽过
                //gift = 0,没抽过
                //返回  code=1    msg =  {choose1 choose2 choose3 wish date}
            }
        });
    },
    //获取卡券
    getCoupon:function(callback){
        $.ajax({
            url:'/api/card',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
                //{"status":1,"msg":[{"cardId":"pKCDxji7MvlTj_JtzqeUtXFJEd6s","cardExt":{"code":"S16110798","openid":"oKCDxjg_qXvWmYiUmofo-tnYxi8g","timestamp":1480416762,"signature":"0c2866f75a186ae3ee89d6410f2d48aa002db578"}}]}
            }
        });
    },
    //卡券抽奖
    cardLottery:function(callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/cardlottery',
            type:'POST',
            dataType:'json',
            success:function(data){
                $('.msgbox').remove();
                return callback(data);
                //返回  code=1    msg = 中奖
                //code=2    msg = 未中奖
            }
        });
        //return callback({
        //    status:1
        //});
    },
    //礼物抽奖
    //id
    giftLottery:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/giftlottery',
            type:'POST',
            data:obj,
            dataType:'json',
            success:function(data){
                $('.msgbox').remove();
                return callback(data);
                //code=1    msg = 中奖
                //code=2    msg = 未中奖
            }
        });
    },
    //留资料
    //firstname
    //    secondname
    //mobile
    //    address
    //email
    //    issend
    submitInfo:function(obj,callback){
        $.ajax({
            url:'/api/info',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
                //返回  code=1    msg = 提交成功
            }
        });
        //return callback({
        //    code:'1'
        //})
    },



};