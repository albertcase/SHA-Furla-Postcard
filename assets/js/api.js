/*All the api collection*/
Api = {
    //保存贺卡
    //choose1  choose2  choose3  wish
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
    },
    //查询贺卡
    //参数  id
    getCard:function(obj,callback){
        $.ajax({
            url:'/api/loadcard',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
                //返回  code=1    msg =  {choose1 choose2 choose3 wish}
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
    },
    //礼物抽奖
    giftLottery:function(callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/giftlottery',
            type:'POST',
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
    },



};