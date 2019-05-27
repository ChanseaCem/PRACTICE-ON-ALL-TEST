$(".getCode").on("click", function () {

    var obj = new Object;
    obj.tel = $("input[type='text']").val();

    if (isnull(obj.name)) {
        layer.msg("用户名输入为空");
    } else if (isnull(obj.pwd)) {
        layer.msg("密码输入为空");
    }

    $.ajax({
        type: "post",
        url: BASE_WEB_PATH + "/userLogin.html",
        data: obj,
        dataType: "json",
        success: function (result) {
            console.log(result)
        }
    })

});
