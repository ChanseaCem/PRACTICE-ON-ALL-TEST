console.log("enter login");

		
Vue.component("header-left",{
	template:`<div class="header-left">
	            <span><img :src="src"></span>
	        </div>`,
	data:function(){
		return {
			src:"img/login/icon_close.png"
		}
	}
});
Vue.component("header-center",{
	template:`<div class="header-center">
	            <span>{{headText}}</span>
	        </div>`,
	data:function(){
		return {
			"headText":"登录"
		}
	}
});
Vue.component("header-right",{
	template:`<div class="header-right">
	            <span>{{righttxt}}</span>
	        </div>`,
	data:function(){
		return {
			"righttxt":"注册"
		}
	}
});

var v_header = new Vue({
	el:"#header",
	data:{

	},
	computed:{
		showArea:function(){

		}
	}

})

var v_main = new Vue({
	el:"#art",
	data:{
		val_tel:"",
		val_pwd:"",
		area_num:"+86",
		is_tel:"username",
		val_username:""
	},
	methods:{
		getTel:function(){
			console.log(this.val_tel);
		},
		showArea:function(){
			console.log(this.val_tel);
		},
		isRight:function(){
			console.log("this.vue.val_tel:"+this.val_tel);
			if(v_main.isStringNull(this.val_tel)){
				alert("请输入手机号码");
				return;
			}
			if(v_main.isStringNull(this.val_username)){
				alert("请输入用户名称");
				return;
			}
			if(/^\d+$/.test(this.val_tel)){
				console.log("isRight:"+this.val_tel);
			}else{
				alert("输入错误，请重新输入");
			}
		},
		submit:function(){
			if(this.is_tel == "tel"){
				if(v_main.isStringNull(this.val_tel)){
					alert("请输入手机号码");
					return;
				}
			}else{
				if(v_main.isStringNull(this.val_username)){
					alert("请输入用户名称");
					return;
				}
			}
			if(v_main.isStringNull(this.val_pwd)){
				alert("请输入密码");
				return;
			}
		},
		exchange:function(){
			if(this.is_tel == "tel"){
				this.is_tel = "username";
				this.val_username = "";
			}else{
				this.is_tel = "tel";
				this.val_tel = "";
			}
		},
		isStringNull:function(e) {
		    if (e == null || e == '' || e == undefined || e == 'null')
		        return true;
		    else
		        return false;
		}
	}
});


//function isStringNull(e) {
//  if (e == null || e == '' || e == undefined || e == 'null')
//      return true;
//  else
//      return false;
//}







