Vue.component('ann',{
	template:`<ul><li @click="onclick"><span>列表</span></li></ul>`,
	methods:{
		onclick:function(e){
			console.log(e);
		}
	}
});

Vue.component("liked",{
	template:'#liked-complate-tpl',
	// template:`<button :class="{liked:liked}" @click = "onclick"><img v-bind:src="liked_color" alt="">点赞{{liked_count}}</button>`,
	data:function(){
		return {
			liked_count:0,
			liked:false,
			liked_color:"img/common/session/collect_gray.png"
		}
	},
	methods:{
		onclick:function(){
			if(!this.liked)
				this.liked_count++;
			else
				this.liked_count--;
			this.liked = !this.liked;

			this.liked_color = this.liked_color.indexOf("gray")>-1 ? this.liked_color.replace("gray","blue") :  this.liked_color.replace("blue","gray") ;
		}
	}
});

var app = new Vue({
	el:"#head",
	data:{
		titleTxt:[{
			"id":"1",
			"txt":"首页"
		}],
		page:0,
	}
});

var test1 = new Vue({
	el:"#test1",
	data:{
		name:"qwe",
		sex:null,
		isshow:true,
	},
	methods:{
		issh:function(){
			this.isshow = !this.isshow;
		}
	}
});

var test2 = new Vue({
	el:"#test2",
	data:{
		foodlist:[{
			"id":"1",
			"name":"李世民",
			"age":"22"
		},{
			"id":"2",
			"name":"李斯",
			"age":"33"
		},{
			"id":"3",
			"name":"陈雪",
			"age":"44"
		}],
		names:{
			"name1":"陈",
			"name2":"里",
		}
	}
});

var test3 = new Vue({
	el:"#test3",
	data:{
		url:"http://baidu.com",
		src:"http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg",
		klass:"btnchat",
		isActive:true
	}
})

var test4 = new Vue({
	el:"#test4",
	methods:{
		onSubmit:function(event){
			event.preventDefault();
			console.log(2);
		},
		onSubmit2:function(){
			console.log("onSubmit2");
		},
		onClick:function(){
			console.log("onClick");
		},
		onClick2:function(){
			console.log("onClick2");
		},
		onClick3:function(){
			console.log("onClick3");
		},
		start:function(){
			console.log("touchstart");
		},
		end:function(){
			console.log("touchend");
		}
	}
})

var test5 = new Vue({
	el:"#test5",
	data:{
		name:"jack",
		name2:"rose",
		name3:23
	}
})

var test6 = new Vue({
	el:"#test6",
	data:{
		interest:["basketball"],
		sex:"male",
		from:"山西",
		dest:["2"],
		a:"admin",
		b:"1"
	}
});

var test7 = new  Vue({
	el:"#test7",
	components:{
		sumb:{
			template:"<button @click='onclick'>提交</button>",
			methods:{
				onclick:function(){
					alert("已提交");
				}
			}
		},
		anniu:{
			template:`<button style="width:80px;height:30px;background:green;color:#fff;" @click='onclick'>提交</button>`,
			methods:{
				onclick:function(){
					alert("绿色按钮，提交");
				}
			}
		},
	},
	data:{
		"test":[{"name":"娜扎","height":"170","weight":"120","run":"70"},
				{"name":"张杰","height":"180","weight":"130","run":"80"},
				{"name":"Jackon Parker","height":"180","weight":"100","run":"50"}
			]
	},
	computed:{
		sumofrun:function(){
			var sum = 0;
			for(var i=0;i<this.test.length;i++){
				sum += parseFloat(this.test[i].run);  
			}
			return sum;
		},
		sumofweight:function(){
			var sum = 0;
			for(var i=0;i<this.test.length;i++){
				sum += parseFloat(this.test[i].height);  
			}
			return sum;
		},
		sumofheight:function(){
			var sum = 0;
			for(var i=0;i<this.test.length;i++){
				sum += parseFloat(this.test[i].weight);  
			}
			return sum;
		},
		averageofheight:function(){
			return (this.sumofrun/this.test.length).toFixed(2);
		},
		averageofweight:function(){
			return (this.sumofrun/this.test.length).toFixed(2);
		},
		averageofrun:function(){
			return (this.sumofrun/this.test.length).toFixed(2);
		}
	},
	methods:{
		tip:function(){
			return "methods和computed的不同在于，computed会缓存，如果下次取值一致，会直接从缓存中取，而methods都会重新计算";
		}
	}
})

Vue.component('user',{
	// template:'<a :href="\'/user/\'+username">@{{username}}</a>',
	template:'<a :href="/user/+username">@{{username}}</a>',
	props:["username"],
	methods:{

	}
});

var test8 = new Vue({
	el:"#test8"
})

Vue.component('balance',{
	template:`<div>
		<show @show-balance = "show_balance"></show>
		<div v-if="show">您的余额是90-</div>
	</div>`,
	data:function(){
		return{
			show:false
		}
	},
	methods:{
		show_balance:function(data){
			this.show = true;
			console.log(data);
		}
	}
})

Vue.component('show',{
	template:`<button @click = "onclick">显示余额</button>`,
	methods:{
		onclick:function(){
			this.$emit("show-balance",{a:1});
		}
	}

})

var test9 = new Vue({
	el:"#test9"
})

// 事件调度器
var Event = new Vue();

Vue.component('me',{
	template:`
		<div>我说：<input type="text" v-model="said"  @keyup = "onclick"/></div>
	`,
	data:function(){
		return{
			said:""
		}
	},
	methods:{
		onclick:function(){
			Event.$emit("o-follows",this.said);
		}
	}
})

Vue.component('you',{
	template:`
		<div>你跟着说：<input type="text" v-model="said" /></div>
	`,
	data:function(){
		return{
			said:''
		}
	},
	mounted:function(){
		//mounted为这个模块加载完后执行
		var self = this;
		Event.$on("o-follows",function(data){
			self.said = data;
		})
	}
})



Vue.filter('current',function(val,unit){
	console.log(val);
	//unit是固定
	val = val || 0;
	unit = unit || "RMB";
	return val + unit;
});

Vue.filter('meter',function(val,unit){
	val = val || 0;
	unit = unit || "mm";
	return (val/1000).toFixed(4) + unit;
})

//自定义指令
Vue.directive('pin',function(el,binding){
	// console.log(binding);
	// console.log(el.style);
	var m = binding.modifiers;
	// console.log(m);
	if(binding.value == true){
		el.style.position = "absolute";

		for(var p in m){
			if(m[p]){
				el.style[p] = 5+"px";
				// el.style[p] = "00e2ff";
			}
		}

	}else{
		el.style.position = "static";
	}
});

var test10 = new Vue({
	el:"#test10",
	data:{
		price:10,
		meter:1,
		card1:false,
		card2:false,
		card3:false
	}
})


var test11 = new Vue({
	el:"#test11",
	data:{
		objStyle:{
			"width":"100px",
			"height":"100px",
			"transform":"scale(10px)",
			"background":"pink"
		},
        name:"i am Jack"
	}
})

// -----------
Vue.component("test-con",{
	template:"<div v-html ='content' v-bind:data='content2'>asfasf</div>",
	props:["content"],
	methods:{
		f1:function(){
			this.content = "<span></span>";
		}
	}

})

/*Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})*/
var test12 =  new Vue({
	el:"#test12",
	data:{
		"content":"111",
		"content2":"<span>content</span>",
		"post":{
			"title":"asdf",
			"content":"asdfasdfsfsdfsd"
		}
	}
})