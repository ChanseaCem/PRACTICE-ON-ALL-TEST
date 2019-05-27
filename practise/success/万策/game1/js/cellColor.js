!(function() {
	var box = game.box;

	game.cellApi = {
		render: function(cellNum) {
			//色差因子，用来设置正确格子的颜色与正常格子的颜色的差异（等级越高，值越小）
			var f = 5;
		    f = game.currentLevel > 9 ? 15 : f;
			f = game.currentLevel > 20 ? 10 : f;
			f = game.currentLevel > 40 ? 8  : f;
			
			var v = f * Math.max(9 - game.currentLevel,1);
			//随机生成颜色
			var disturbColor = this.getDisturbColor();
			var disturbColorStr = "rgb(" + disturbColor.join(',') + ")";
			var targetColor = "rgb(" + this.getTargetColor(disturbColor, v).join(',') + ")";
			
			//初始化设置格子颜色
			box.find("span").css({
				'background': disturbColorStr
			});
			//随机产生一个正确的格子
			var m = Math.floor(Math.random() * cellNum * cellNum);
			box.find("span").eq(m).css({
				'background': targetColor
			}).data('type','target');
			
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
		
	};
})();