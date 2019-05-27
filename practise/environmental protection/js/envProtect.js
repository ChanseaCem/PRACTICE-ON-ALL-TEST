
$(function(){
	window.onload = function(){
		var getCollectVal = localStorage.getItem("envCollect");
		initCollect(getCollectVal);
	};

})
