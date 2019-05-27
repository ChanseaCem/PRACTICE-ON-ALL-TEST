!(function(){
	var box=game.box;
	game.cellApi={
		render :function(num){
           var f=5;
           f=game.level>9?15:f;
           f=game.level>20?10:f;
           f=game.level>40?8:f;
           var v=f*Math.max(9-game.level,1);
           var disturbColor = this.getDisturbColor();
           var disturbColorStr = "rgb(" + disturbColor.join(',') + ")";
		   var targetColor = "rgb(" + this.getTargetColor(disturbColor, v).join(',') + ")";
			box.find("span").css({
				"background":disturbColorStr});
			var m=Math.floor(Math.random()*num*num);
			box.find("span").eq(m).css({
				"background":targetColor
			}).data("type","target");
		},
		getDisturbColor: function() {
			return [
			    Math.floor(Math.random() * 255),
			    Math.floor(Math.random() * 255),
			    Math.floor(Math.random() * 255)
			];
		},
		getTargetColor: function(distColor, v) {
			var targetColor = [];
			for (var i in distColor) {
				targetColor[i] = distColor[i] + 10 + v;
			}
			return targetColor;
		}
	}
})();

