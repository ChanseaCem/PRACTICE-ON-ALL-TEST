
$(function(){
	window.onload = function(){
		var getCollectVal = localStorage.getItem("contactCollect");
		initCollect(getCollectVal);
	};

})

/**
 * 提交留言
 * @param  {[type]} ){	var name          [description]
 * @return {[type]}         [description]
 */
$("input[type='button']").on("click",function(){
	var name = $(".name").val();
	var tel = $(".tel").val();
	var email = $(".email").val();
	var said = $(".said").val();
	var sex = $('select[name="sex"] option:selected') .val();
	var area = $('select[name="area"] option:selected') .val();

	if(isnull(name)){
		confirm("姓名不能为空！");
	}else if(isnull(tel)){
		confirm("手机号不能为空！");
	}else if(isnull(email)){
		confirm("邮箱不能为空！");
	}else if(isnull(said)){
		confirm("输入内容不能为空！");
	}else if(isnull(sex)){
		confirm("性别尚未选择！");
	}else if(isnull(area)){
		confirm("省份地址尚未选择！");
	}else if(!isEmail(email)){
		confirm("请输入正确邮箱！");
	}else if(!isTel(tel)){
		confirm("请输入正确邮手机号！");
	}else{
		var bool = confirm("提交留言成功！");
		if(bool){
			window.location.reload();
		}
	}
})

/**
 * 判断是否为空
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function isnull(e) {
    if (e == null || e == '' || e == undefined || e == 'null')
        return true;
    else
        return false;
}

/**
 * 判断是否为邮箱
 * @return {Boolean} [description]
 */
function isEmail(e){
	var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if(ePattern.test(e)){
		return true;
	}else{
		return false;
	}
}

/**
 * 判断是否为手机号
 * @return {Boolean} [description]
 */
function isTel(e){
	var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
	if(mPattern.test(e)){
		return true;
	}else{
		return false;
	}
}
function check(){
　　var uid = $("input[name='pro']").val();　　

　　if(uid == null || uid == ""){
　　　　alert("用户名不能为空");
　　　　return false;
　　}
	return true;
}