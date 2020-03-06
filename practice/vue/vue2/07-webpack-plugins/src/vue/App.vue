<template>
	<div>
		<div>{{msg}}</div>
		<button @click="btnClick">练习</button>
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
				des: "test"
			}
		},
		methods: {
			btnClick: function() {
				console.log("练习")
			}
		},
		components:{
			Cpn
		}
	}
</script>

<style>
</style>
