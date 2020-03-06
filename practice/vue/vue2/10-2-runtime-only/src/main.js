import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

console.log(App)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

/* 
  runtime-only 比 runtime-compiler
  性能:高
  文件大小:小
  代码量:少
 */