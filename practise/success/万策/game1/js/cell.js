!(function(){
	var box=game.box;
	game.cellApi={
		render :function(cellNum){
			//初始化设置格子图片
			box.find("span").css({
				"background":"url(./img/black1.png)",
				"background-size":"cover"
			});
			//随机产生一个正确的格子
			var m=Math.floor(Math.random()*cellNum*cellNum);
			box.find("span").eq(m).css({
				"background":"url(./img/black2.png)",
				"background-size":"cover"
			}).data("type","target");
		}
	}
})();
