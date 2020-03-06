import Vue from "vue"
import Vuex from "vuex"

import {
  INCREMENT,
  UPDATEINFO,
  UPDATEINFO1
} from "@/store/mutation-types"

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const modelA = {
  state:{
    age:1
  },
  mutations:{
    updateAge(state){
      return state.age + "updateAge"
    }
  },
  actions:{
    getages(context){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(123123)
        })
      })
    }
  },
  getters:{
    fullnamechid(state,getters,rooterState){
      return state.age+90
    }
  },
  modules:{}//不清楚model可否再嵌套一层model
}
const store = new Vuex.Store({
  state: {
    counter: 0,
    books: [{
        "id": 1,
        "name": "《克双诗集》",
        "date": "2006-11-01 10:00:00"
      },
      {
        "id": 2,
        "name": "《克双词集》",
        "date": "2007-01-01 10:00:00"
      },
      {
        "id": 3,
        "name": "《红色的眼睛》",
        "date": "2006-02-01 10:00:00"
      },
      {
        "id": 4,
        "name": "《克双文集》",
        "date": "2006-01-01 10:00:00"
      }
    ],
    name:"zhangsn"
  },
  mutations: {
    // 普通方式
    // increment(state) {
    //   state.counter++
    // },
    // mutations使用,官方推荐方式
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    addCount(state, count) {
      state.counter += count
    },
    subCount(state, paload) {
      state.counter -= paload.count
    },
    [UPDATEINFO](state, paload) {
      Vue.set(state.books[0], "id", paload.id)
    },
    [UPDATEINFO1](state, paload) {
      // Vue.set(state.books[0],"id",paload)
      Vue.delete(state.books, 2)
    }
  },
  actions: {
    // 当有异步操作的时候就是在actions里面做的
    // 这个方法忘了说明,不能直接去修改state,要修改数据一定要通过mutations
    // new Promise 之后的then在调用这个方法的地方之后进行
    aUpdateInfo(context, paload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(UPDATEINFO1, paload)
          resolve("is resolve")
        })
      })
    }
  },
  // 类似计算属性
  getters: {
    thenDates(state,getters) {
      console.log(getters)
      return (date) => {
        let d = date || "0000-00-00 00:00:00"
        return state.books.filter((item) => {
          return item.date > d
        })
      }
    },
    fullname(state,getters,rooterState){
      return state.name + rooterState.name
    },
    fullname2(state,getters){
      return state.name + getters.fullname
    },
    fullname3(state,aaa){
      return state.name + aaa.fullname
    },
    fullname4(state,getters,rooterState){
      console.log(rooterState)
      return state.name + rooterState.name
    }
  },
  modules: {
    a:modelA
  }
})

// 3.导出
export default store
