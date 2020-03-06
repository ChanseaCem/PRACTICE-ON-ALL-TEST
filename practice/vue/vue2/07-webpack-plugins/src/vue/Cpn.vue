<template>
	<div>
		<h2 class="title">{{msg}}</h2>
		<slot name="msg2"></slot>
	</div>
</template>

<script>
	export default {
		name:"Cpn",
		data(){
			return {
				msg:"cpn的，小组件",
				msg2:"cpn的，小组件2"
			}
		}
	}
</script>

<style>
	.title{
		color: green;
	}
</style>
