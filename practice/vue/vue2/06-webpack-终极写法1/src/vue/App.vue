<template>
	<div>
		<div>{{msg}}</div>
		<button @click="btnClick">打印</button>
		<div>{{des}}</div>
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
