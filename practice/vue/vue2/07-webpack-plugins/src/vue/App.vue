<template>
	<div>
		<pre>
			搭建本地服务器
			a.下载本地服务器模块2.9.1版本和webpack3.6.0匹配
			npm install --save-dev webpack-dev-server@2.9.1
			b.设置webpack-config.js
			b.2:
			module.exports ={
				devServer:{和entry同等级
					contentBase:为哪一个文件夹提供本地服务，默认是根文件夹，这里要填写./dist,
					inline:页面实时监听刷新，true
					port:端口号，默认8080
					historyApiFallback:在SPA页面中，依赖HTML5的history模式
				}
			}
			c.package.json 设置,script下：
			c.1:"dev":"webpack-dev-server --open" --open参数表示直接打开浏览器
		</pre>
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
