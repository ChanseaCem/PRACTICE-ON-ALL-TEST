//$(function(){
//$("#btnstart").bind("click",function () {
//$("#startPage").hide();
//$("#playPage").show();
//$("#resultPage").css("margin-top","-300px").hide();
//shows();
//});
//
//$("#btnmore").bind("click",function(){
//	window.location.href="2.html";
//});
//$("#stop").bind("click",function(){
//	$("#startPage").hide();
//	$("#playPage").hide();
//	$("#resultPage").css("margin-top","100px").show();
//});
//$("#playAagin").bind("click",function(){
//	window.location.href="index.html";
//});
//function shows(){
//	var lv=3;
//	var box=$("#box");
//	var lvstr="lv"+lv;
//	box.prop("class",lvstr);
//	for(var i=0;i<lv*lv;i++)
//	{
//		box.append($("<span>"))
//	}}
//})

!(function(){
	var totalTime=10;
	var s;
	var N;
	var game={
		
		strartPage:$("#startPage"),
		playPage:$("#playPage"),
		resultPage:$("#resultPage"),
		stopPage:$("#stopPage"),
		btnstart:$("#btnstart"),
		btnmore:$("#btnmore"),
		btnstop:$("#stop"),
		box:$("#box"),
		time:$("#spendTime"),
		btnAgain:$("#playAagin"),
		btnR:$("#returnplay"),
		btnOnece:$("#playonce"),
		
		
		level: 0,
		timelimit: totalTime,
		addtime: 2,
		score: 0,
		
		
		
		lvnum: [2,2,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,10,10],
		
		init: function(){
			var evenname="ontouchstart" in document.documentElement ? "touched" : "click";
			this.btnstart.on(evenname,this.start.bind(this));
		    this.btnAgain.on(evenname,this.startAgain.bind(this));
		    this.btnstop.on(evenname,this.stop.bind(this));
		    this.btnOnece.on(evenname,this.newplay.bind(this));
		    this.btnR.on(evenname,this.returnplay.bind(this));
		},
		start: function(){
			this.strartPage.hide();
			this.playPage.show();
			this.resultPage.css({"margin-top" : "-300px"}).hide();
			this.box.fadeIn();
			
			this.shows();
			this.play();
		},
		shows: function(){
			var game=this;
			if(this.timelimit<0)
			{
				clearTimeout(this.timeoutId);
				this.GameOver();
				return;
			}
			if(this.timelimit=="STOP")
			{
				clearTimeout(this.timeoutId);
				return;
			}
			
			this.time.html(this.timelimit);
			this.timelimit--;
			s=this.timelimit;
			this.timeoutId=setTimeout(this.shows.bind(game),1000);
		},
		play: function(){
//			var num;
			if(this.level>this.lvnum.length-1)
			{
			var num=this.lvnum[this.lvnum.length-1];
		    }
			else
			{
			  var  num=this.lvnum[this.level];
			}
			var lvstr="lv"+num;
			this.box.prop("class",lvstr);
			for(var i=0;i<num*num;i++)
			{
				var evenname="ontouchstart" in document.documentElement ? "touched" : "click";
				this.box.append($("<span>").on(evenname,this.selecta.bind(this)));
			}
             N=num;
             if(N==2||N==4||N==6||N==8)
			{this.cellApi.render(num);}
			else
			{this.picture.render(num);}
		},
		selecta: function(event){
			 this.playPage.find(".core").text("");
			if($(event.target).data("type") == "target"){
				this.timelimit += this.addtime;
				this.score += 1;
				this.nextLevel();
			}
			else{
				
				this.score -= 1;	
				this.playPage.find(".core").text("选择错误！扣一分！");

				}
			
		},
		nextLevel: function(){
			this.level++;
			this.box.empty();
			this.play();
		},
		GameOver:function(){
			this.box.fadeOut(1500,function(){
				this.playPage.hide();
				this.resultPage.show().animate(
					{
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
			this.level=0;
			this.score=0;
			this.timelimit=totalTime;
		},
		
		stop: function(){
			 this.stopPage.show();
			 
			this.timelimit="STOP";
			
	          
		},
		newplay:function()
		{
			this.reset();
			this.stopPage.hide();
			this.timeoutId=setTimeout(this.shows.bind(game),1000);
			this.cellApi.render(N);
	        this.playPage.find(".core").text("");
		},
		returnplay:function()
		{
//			this.timeoutId=setTimeout(this.shows.bind(game),1000);
			 this.playPage.find(".core").text("");
			this.timelimit=s;
			this.stopPage.hide();
			this.timeoutId=setTimeout(this.shows.bind(game),1000);
		}
		
	}
	game.init();
	window.game=game;
})();

















