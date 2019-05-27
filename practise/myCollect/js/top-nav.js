$(function(){
	$(".top-nav div a").click(function(){
		$(this).parent().siblings(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
});