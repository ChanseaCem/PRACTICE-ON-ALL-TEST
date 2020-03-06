// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// 测试eslint 可直接修改eslint --> config/index.js useEslint
function sum (num1, num2) {
  return num1 + num2
}
console.log(sum(1,2))
