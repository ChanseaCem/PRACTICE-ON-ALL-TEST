<template>
	<div>
		<div>{{msg}}</div>
		<button @click="btnClick">打印</button>
		<div>{{des}}</div>
		<p>如果要使用.vue文件，需要安装vue-loader</p>
		<p>npm install vue-loader vue-template-compiler --save-dev</p>
		<p>vue-loader版本问题：</p>
		<p>从14版本开始，需要再额外配置一个插件，否则会报错，所以可以的话，把版本改成小于14的</p>
		
		<Cpn><span slot="msg2">slot 练习</span></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue';
	
	export default {
		name:"App",
		data() {
			return {
				msg: "hello world",
				des: "el和template的关系是,index.html那边只需要一个div,然后剩下的都写在template里面,执行的时候vue会替换掉html的div"
			}
		},
		methods: {
			btnClick: function() {
				console.log("打印")
			}
		},
		components:{
			Cpn
		}
	}
</script>

<style>
</style>
