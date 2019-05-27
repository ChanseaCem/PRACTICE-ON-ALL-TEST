
$(function(){
	/**
	 * 轮播
	 * @type {Swiper}
	 */
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    // Enable debugger
	    debugger: true
	});

	//获取北京时间	 
	$("time").text(getNowFormatDate());
	setInterval(function(){
		$("time").text(getNowFormatDate());
	},1000);
})

/**
 * [newPage 跳转新页面]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function newPage(url){
	window.location.href = url;
}

/**
 *  web 存储
 * @param  {[type]} key [description]
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
function clickCounter(key,val){
	if(typeof(Storage)!=="undefined"){
		localStorage.setItem(key,val);
	} else {
		document.getElementById("result").innerHTML="对不起，您的浏览器不支持 web 存储。";
	}
}

/**
 * 初始化收藏
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
function initCollect(val){
	if(val==1){
		$(".right-top img").attr("src","../images/collect_blue.png")
	}else{
		$(".right-top img").attr("src","../images/collect_gray.png")
	}
}


/**
 * [collect 点击收藏变化图片]
 * @param  {[type]} e [当前对象]
 */
function collect(e,key) {
	//获取点击的时候的图片
	var src = $(e).find("img").attr("src");

	//判断图片路径是否是灰色图片的路径
	if(src.indexOf("gray")>-1){
		//灰色图片替换成蓝色的
		$(e).find("img").attr("src",src.replace("gray","blue"));
		clickCounter(key,1);
	}else{
		//蓝色图替换成灰色图片
		$(e).find("img").attr("src",src.replace("blue","gray"));
		clickCounter(key,0);
	}
}

/**
 * 获取当前时间，格式YYYY-MM-DD HH:mm:ss
 */
function getNowFormatDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var day = d.getDay();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var str = year + "-" + month + "-" + date + " " + h + ":" + m + ":" + s;
    return str;
}