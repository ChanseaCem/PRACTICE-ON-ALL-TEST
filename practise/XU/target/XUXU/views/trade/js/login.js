$("#login").on("click", function () {

    var obj = new Object;
    obj.name = $("input[type='text']").val();
    obj.pwd = $("input[type='password']").val();

    if (isnull(obj.name)) {
        layer.open({
            content: "用户名输入为空",
            skin: 'footer',
            className:"pop-up-footer"
        });
    } else if (isnull(obj.pwd)) {
        layer.open({
            content: "密码输入为空",
            skin: 'footer',
            className:"pop-up-footer"
        });
    }

    $.ajax({
        type: "post",
        url: BASE_WEB_PATH + "/userLogin.html",
        data: obj,
        dataType: "json",
        success: function (result) {
            console.log(result);
            layer.open({
                content: result.msg,
                skin: 'footer',
                className:"pop-up-footer"
            });
            if(result.code == 1){
                setTimeout(function () {
                    window.location.href = "index.html";
                    saveLocal("userid",obj.name);
                },1000)
            }
        }
    })

});
