
$(function(){
	window.onload = function(){
		var getCollectVal = localStorage.getItem("indexCollect");
		initCollect(getCollectVal);
	};

	window.onscroll = function(){
		
		if($("body")[0].scrollHeight - $("body")[0].scrollTop <= 1000){
			$(".aside").css({"visibility": "hidden","transition":"all 0.5s linear"});
		}else{
			$(".aside").css({"visibility": "visible","transition":"all 0.5s linear"});
		}
	}
})
