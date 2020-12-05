// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

/*
  runtime-only 比 runtime-compiler
  性能:高
  文件大小:小
  代码量:少
 */

/*
 这里也可以用render函数(和runtime-only一样的写法)

 */

new Vue({
  el: '#app',
  render: createElement => {
    /*
      createElement("标签",{class:"actvie"},["内容"])
      这个函数也可以接收组件(这个时候的组件(例如App)不是template,而是一个对象)
    */
   console.log(App)
    // return createElement("h2",{class:"actvie"},["内容",createElement("span",{class:"actvie"},["xxx"])])
    return createElement(App)
  }
})
