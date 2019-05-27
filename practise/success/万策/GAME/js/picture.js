!(function(){
	var box=game.box;
	game.picture={
		render :function(num){

			box.find("span").css({
				"background":"url(./img/black1.png)",
				"background-size":"cover"
			});
//						alert();
			var m=Math.floor(Math.random()*num*num);
			box.find("span").eq(m).css({
				"background":"url(./img/black2.png)",
				"background-size":"cover"
			}).data("type","target");
		}
	}
})();

