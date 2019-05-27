$(function () {

    //获取头像
    getProfile();
});

//选择头像上传
$('.sele1 img').click(function () {
    layer.open({
        content: $('.g-ly').html(),
        skin: 'footer',
        className: 'layer-footer-tip1'
    });
});

/**
 * 获取用户头像
 */
function getProfile() {

    var obj = new Object;
    obj.id = 1;

    $.ajax({
        type: "post",
        url: BASE_WEB_PATH + "/getProfile.json",
        data: obj,
        dataType: "json",
        success: function (result) {
            console.log(result);
            $(".touxiang img").attr("src",result.data);
            getUserInfo(localStorage.userid);
        }
    })
}


/**
 * 获取用户头像
 */
function getUserInfo(id){

    var obj = new Object;
    obj.id = id;

    $.ajax({
        type: "post",
        url: BASE_WEB_PATH + "/showUser.do",
        data: obj,
        dataType: "json",
        success: function (result) {
            console.log(result);
            $(".name").text(result.username);
            $("#tel").text(result.tel);
        }
    })
}