function ChangeLanguage(type) {

    $.ajax({
        "type":"POST",
        "url":BASE_URL+"/user/ChangeLanguage.html",
        "data":{"type":type},
        "success":function(rtnData){
            var result = JSON.parse(rtnData);
            layer.open({
                title:false,
                shadeClose:true,
                area: ['100%'],
                content: result.msg,
                time:1,
                skin: 'footer'
            });
            if(result.code==1){
                setTimeout("location.reload();",1000);
            }
        },
        "error":function(){
            layer.closeAll();
            layer.open({
                content: "请求失败，请检查网络状况",
                skin: 'footer',
                className:"pop-up-footer internet",
                success:function () {
                    $(".internet").find(".layui-m-layercont").attr({"data-i18n":"internet"}).addClass("i18n");
                }
            });
        }
    });

    
}

/*清除本地缓存*/
function clearCookie(){
    var index=layer.open({
        content: '您确定要清除本地缓存吗？'
        ,className: 'pop-up-footer'
        ,btn: [ '确定','取消']
        // ,skin:"footer"
        ,yes:function(){
            $(".cookie").text("0MB");
            layer.open({
                content:"已经清除",
                className: 'pop-up-msg',
                skin:'msg',
                time: 1, //2秒后自动关闭
            })
        }
        ,no:function(){
            //返回
            layer.close(index);
        }
    });
};

/*语言选择*/
function selectLanguage(){
    var index=layer.open({
        content:$(".g-ly").html()
        ,className: 'pop-up-footer'
        ,btn: ['取消']
        ,skin:"footer"
        ,yes:function(){
            layer.close(index);
        }
        ,no:function(){
            //返回
            layer.close(index);
        }
    });
};

/*版本检查*/
function checkVersion(){
    console.log(2);
    var index=layer.open({
        content:$("#checkVersion").html()
        ,className: 'pop-up-footer'
        ,btn: [ '确定','取消']
        ,skin:"footer"
        ,yes:function(){
            layer.close(index);
        }
        ,no:function(){
            //返回
            layer.close(index);
        }
    });
};

/*退出登录*/
function outLogin(){
    // var index=layer.open({
    //     content:"确定退出登录？"
    //     ,className: 'pop-up-tip loginOut'
    //     ,btn: [ '确定','取消']
    //     ,yes:function(){
    //
    //         $.ajax({
    //             "type":"POST",
    //             "url":BASE_URL+"loginOut.html",
    //             "data":null,
    //             "success":function(data){
    //
    //                 var rtnData = eval('(' + data + ')');
    //
    //                 if(rtnData.code == 1){
    //                     window.location="login.html";
    //                     layer.closeAll();
    //                     layer.open({
    //                         content: "退出账号成功",
    //                         skin: 'footer',
    //                         className:"pop-up-footer outSuccess",
    //                         success:function () {
    //                             $(".outSuccess").find(".layui-m-layercont").attr({"data-i18n":"outSuccess"}).addClass("i18n");
    //                         }
    //                     });
    //
    //                 }
    //
    //             },
    //             "error":function(){
    //                 layer.closeAll();
    //                 layer.open({
    //                     content: "请求失败，请检查网络状况",
    //                     skin: 'footer',
    //                     className:"pop-up-footer internet",
    //                     success:function () {
    //                         $(".internet").find(".layui-m-layercont").attr({"data-i18n":"internet"}).addClass("i18n");
    //                     }
    //                 });
    //             }
    //         });
    //
    //     }
    //     ,no:function(){
    //         //返回
    //         layer.close(index);
    //     }
    //     ,success:function(){
    //         $(".loginOut").find(".layui-m-layercont").attr({"data-i18n":"loginOut"}).addClass("i18n");
    //         $(".loginOut").find("span[type='0']").attr({"data-i18n":"cancel"}).addClass("i18n");
    //         $(".loginOut").find("span[type='1']").attr({"data-i18n":"sure"}).addClass("i18n");
    //     }
    // });

    var index = layer.open({
        content:"确定切换？"
        ,className: 'pop-up-footer loginOut'
        ,btn: [ '确定','取消']
        ,skin:"footer"
        ,yes:function(){
            //关闭弹窗
            layer.close(index);
        }
        ,no:function(){
            //返回
            layer.close(index);
        }
        ,success:function () {
            $(".loginOut").find("span[type='0']").on("click",function () {
                layer.close(index);
            });
            $(".loginOut").find("span[type='1']").on("click",function () {
                isOut();
            });
        }
    });
};

function isOut(){
    $.ajax({
        "type":"POST",
        "url":BASE_URL+"loginOut.html",
        "data":null,
        "success":function(data){

            var rtnData = eval('(' + data + ')');

            if(rtnData.code == 1){
                window.location="login.html";
                layer.closeAll();
                layer.open({
                    content: "退出账号成功",
                    skin: 'footer',
                    className:"pop-up-footer outSuccess",
                    success:function () {
                        $(".outSuccess").find(".layui-m-layercont").attr({"data-i18n":"outSuccess"}).addClass("i18n");
                    }
                });

            }

        },
        "error":function(){
            layer.closeAll();
            layer.open({
                content: "请求失败，请检查网络状况",
                skin: 'footer',
                className:"pop-up-footer internet",
                success:function () {
                    $(".internet").find(".layui-m-layercont").attr({"data-i18n":"internet"}).addClass("i18n");
                }
            });
        }
    });
}

