/*All the api collection*/
Api = {
    isLogin:function(callback){
        $.ajax({
            url:'/api/islogin',
            type:'POST',
            dataType:'json',
            success:function(data){
                return callback(data);
            }
        });
    },
    selectedProducts:function(obj,callback){
        $.ajax({
            url:'/api/check',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },
    //mobile checknum  code
    wishWords:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/submit',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                $('.msgbox').remove();
                return callback(data);
            }
        });
    },
    //mobile code
    card:function(obj,callback){
        Common.msgBox('loading...');
        $.ajax({
            url:'/api/submit2',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                $('.msgbox').remove();
                return callback(data);
            }
        });
    },
    showAll:function(obj,callback){
        $.ajax({
            url:'/api/getredpacket',
            type:'POST',
            dataType:'json',
            data:obj,
            success:function(data){
                return callback(data);
            }
        });
    },



};