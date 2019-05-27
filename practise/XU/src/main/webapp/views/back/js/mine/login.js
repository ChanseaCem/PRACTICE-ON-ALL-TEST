$("#login").on("click", function () {

    var obj = new Object;
    obj.name = $("input[type='text']").val();
    obj.pwd = $("input[type='password']").val();

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
            console.log(result);
            window.location.href = "index.html";
        }
    })

});

/**
 * 判断值是否为空
 * @param e
 * @returns {boolean}
 */
function isnull(e) {
    if (e == null || e == '' || e == undefined || e == 'null')
        return true;
    else
        return false;
}

/**
 * 判断值是否为空（判断所有选项）
 * @param e
 * @returns {boolean}
 */
function isNullOfObj(obj) {
    for(var i in obj){
        if(obj[i]==""){
            layer.open(i+"选项输入为空，请填写完整");
            return;
        }
    }
}