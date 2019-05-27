//自执行函数表达式，及时释放内存
!(function(){
	var totalTime=3;
	var game={
		//变量初始化
		btn_Over:$("#btn_over"),
		btn_Pause:$("#btn_pause"),
		btn_Again2:$("#btn_again2"),
		startPage: $("#start_page"),
		playPage: $("#play_page"),
		resultPage: $("#result_page"),
		
		btnStart: $("#btn_start"),
		btnAgain: $("#btn_again"),
		box: $("#box"),
		//关卡数以及时间的计数
		spanTime: $("#time"),
		currentLevel : 0,
		timeLimit: totalTime,
		addTime: 2,
		score: 0,
		
		//设置阶数
		lvCellNumbers: [3,4,5,6,7,8,9],
		
		init: function(){
			var eventName="ontouchstart" in document.documentElement ? "touched" : "click";
			//this当前的操作对象（下面的哦this指代的是game对象）
			this.btnStart.on(eventName,this.start.bind(this));
			this.btnAgain.on(eventName,this.startAgain.bind(this));
			this.btn_Over.on(eventName,this.btn_over.bind(this));
			this.btn_Pause.on(eventName,this.btn_pause.bind(this));
			this.btn_Again2.on(eventName,this.btn_again2.bind(this));
		},
		start: function(){
			this.startPage.hide();
			this.playPage.show();
			this.resultPage.css({"margin-top" : "-300px"}).hide();
			this.box.fadeIn();
			this.tick();
			this.renderCells();
		},
		//倒计时
		tick: function(){
			var game=this;
			if(this.timeLimit<0){
				clearTimeout(this.timeoutId);
				this.gameOver();
				return;
			}
			
			this.spanTime.html(this.timeLimit);
			this.timeLimit--;
			
			this.timeoutId=setTimeout(this.tick.bind(game),1000);
		},
		//渲染格子
		renderCells :function(){
			if(this.currentLevel > this.lvCellNumbers.length - 1){
				var cellNum=this.lvCellNumbers[this.lvCellNumbers.length-1];
			}else{
				var cellNum=this.lvCellNumbers[this.currentLevel];
			}
			var lvstr="lv"+cellNum;
			this.box.prop("class",lvstr);
			for(var i=0;i<cellNum*cellNum;i++){
				//渲染格子并且绑定相关事件，回调验证
				var eventName="ontouchstart" in document.documentElement ? "touched" : "click";
				this.box.append($("<span>").on(eventName,this.validateSelect.bind(this)));
			}
			
			this.cellApi.render(cellNum);
		},
		validateSelect: function(event){
			//判断当前对象是否为目标对象（e.target）
			if($(event.target).data("type") == "target"){
				this.timeLimit += this.addTime;
				
				this.score += 1;
				this.nextLevel();
			}
		},
		nextLevel: function(){
			this.currentLevel++;
			this.box.empty();
			this.renderCells();
		},
		gameOver: function(){
			this.box.fadeOut(1500,function(){
				this.playPage.hide();
				this.resultPage.show().animate({
					marginTop:"50px"
				},1000);
				this.resultPage.find(".score").text(this.score);
			}.bind(this)).empty();
		},
		startAgain: function(){
			this.reset();
			this.start();
		},
		reset: function(){
			this.currentLevel=0;
			this.score=0;
			this.timeLimit=totalTime;
		},
		btn_over:function(){
			this.gameOver();
		},
		btn_pause:function(){
			if(this.tick){
				clearTimeout(this.timeoutId);
			}
		},
		btn_again2:function(){
			if(this.tick()){
				this.tick();
			}
		}
	}
	//init方法初始化
	game.init();
	window.game=game;
})();
