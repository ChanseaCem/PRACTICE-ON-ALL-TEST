//抽取组件,让new Vue更简洁干净
// const App = {
// 	template: `
// 			<div>
// 				<div>{{msg}}</div>
// 				<button @click="btnClick">打印</button>
// 				<div>{{des}}</div>
// 			</div>
// 			`,
// 	data() {
// 		return {
// 			msg: "hello world",
// 			des: "el和template的关系是,index.html那边只需要一个div,然后剩下的都写在template里面,执行的时候vue会替换掉html的div"
// 		}
// 	},
// 	methods: {
// 		btnClick: function() {
// 			console.log("打印")
// 		}
// 	}
// }

import App from './vue/app.js'

import Vue from "vue";
new Vue({
	el: "#app",
	template: '<App />',
	components: {
		App
	}
})
