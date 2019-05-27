console.log("enter ");

var headerlist = ["1GCNY/CNY","2GCNY/CNY","3GCNY/CNY","4GCNY/CNY","5GCNY/CNY","6GCNY/CNY"];

Vue.component('shadowbg-list-p',{
	// template:`<ul class="header-list" @click.stop><li v-for="i in list" @click="onclick">{{i}}</li></ul>`,
	template:`<li @click="$emit('isshow')">{{ listp }}</li>`,
	props:["listp"],
	/*data:function(){
		return{
			list1:headerlist,
			test:"1"
		}
	},
	methods:{
		onclick:function(e){
			console.log(e);
		}
	}*/
});

new Vue({
	el:"#transaction-header",
	data:{
		shadowbg:false,
		list:headerlist,
		test:123,
		tt:""
	},
	methods:{
		shadowbg_click:function(){
			this.shadowbg = !this.shadowbg;
		},
		datachange:function(data){
			this.shadowbg_click();
			this.tt = data;
		}
	},
	mounted: function(){
		console.log(this.list[0]);
		//mounted为这个模块加载完后执行
		this.tt == "" ? this.tt = this.list[0] : "";
	}
})