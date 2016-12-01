//redpacket
;(function(){
    'use strict';

    var controller = function(){
       this.vjson = ['唐嫣','李微漪','谭元元','陈漫','欧铠淳','黄韵玲'];
    };
    controller.prototype = {
        init:function(){

            var self = this;
            //bind all dom element
            self.submitForm();

        },

        formValidate:function(){
            var self = this;
            var validate = true,
                inputMobile = document.getElementById('input-mobile'),
                inputFirstName = document.getElementById('input-firstname'),
                inputLastName = document.getElementById('input-lastname'),
                inputMail = document.getElementById('input-mail'),
                inputAddress = document.getElementById('input-address');
            if(!inputFirstName.value){
                Common.errorMsg.add(inputFirstName.parentElement,'名不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputFirstName.parentElement);
            };

            if(!inputLastName.value){
                Common.errorMsg.add(inputLastName.parentElement,'姓不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputLastName.parentElement);
            };

            if(!inputAddress.value){
                Common.errorMsg.add(inputAddress.parentElement,'地址不能为空');
                validate = false;
            }else{
                Common.errorMsg.remove(inputAddress.parentElement);
            };

            if(!inputMobile.value){
                Common.errorMsg.add(inputMobile.parentElement,'手机号码不能为空');
                validate = false;
            }else{
                var reg=/^1\d{10}$/;
                if(!(reg.test(inputMobile.value))){
                    validate = false;
                    Common.errorMsg.add(inputMobile.parentElement,'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMobile.parentElement);
                }
            }

            if(!inputMail.value){
                Common.errorMsg.add(inputMail.parentElement,'邮箱不能为空');
                validate = false;
            }else{
                var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!(reg.test(inputMail.value))){
                    validate = false;
                    Common.errorMsg.add(inputMail.parentElement,'邮箱格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove(inputMail.parentElement);
                }
            }

            if(validate){
                return true;
            }
            return false;
        },
        submitForm:function(){
            var self = this;

            /*
             * Submit the Form
             */
            var btnSubmit = $('.btn-submit');
            var enableSubmit = true;
            $('.input-box input').on('keyup',function(){
                self.formValidate();
            });

            btnSubmit.on('touchstart',function(){
                if(self.formValidate()){
                    if(!enableSubmit) return;
                    enableSubmit = false;
                    var inputMobileVal = document.getElementById('input-mobile').value,
                        inputFirstNameVal = document.getElementById('input-firstname').value,
                        inputLastNameVal = document.getElementById('input-lastname').value,
                        inputMailVal = document.getElementById('input-mail').value,
                        inputAddressVal = document.getElementById('input-address').value,
                        issend = $('#input-receive').is(':checked');
                    Api.submitInfo({
                        firstname:inputLastNameVal,
                        secondname:inputFirstNameVal,
                        mobile:inputMobileVal,
                        address:inputAddressVal,
                        email:inputMailVal,
                        issend:issend
                    },function(data){
                        if(data.code==1){
                            console.log('提交成功');
                            $('#form-contact').remove();
                            $('.success-block').removeClass('hide');
                        }else{
                            alert(data.msg);
                        }
                    });


                };
            });

            $('.btn-gohome').on('touchstart',function(){
                Common.goHomePage();
            });
        },


    };

    if (typeof define === 'function' && define.amd){
        // we have an AMD loader.
        define(function(){
            return controller;
        });
    }
    else {
        this.controller = controller;
    }


}).call(this);

$(document).ready(function(){
    var redpacket= new controller();
    redpacket.init();
});