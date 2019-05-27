$(".getCode").on("click", function () {

    var obj = new Object;
    obj.tel = $("input[type='text']").val();

    if (isnull(obj.tel)) {
        layer.msg("手机号输入为空");
    }

    $.ajax({
        type: "post",
        url: BASE_WEB_PATH + "/getcode.json",
        data: obj,
        dataType: "json",
        success: function (result) {
            console.log(result)
        }
    })

});
