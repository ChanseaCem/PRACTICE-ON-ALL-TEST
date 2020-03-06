<template>
  <div id="app">
    <p>{{$store.a.age}}</p>
    <hr>
    <p>{{$store.getters.fullname}}</p>
    <p>{{$store.getters.fullname2}}</p>
    <p>{{$store.getters.fullnamechid}}</p>
    <p>{{$store.getters.fullname4}}</p>
    <hr>
    {{msg}}
    <p>{{$store.state.counter}}</p>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(10)">加十</button>
    <button @click="subCount(10)">减十</button>
    <button @click="updateInfo(123)">修改信息</button>
    <button @click="updateInfo1(123)">修改信息1</button>
    <button @click="getagesapp()">修改信息2</button>
    <ul>
      <li v-for='item in $store.getters.thenDates("2006-05-00")'>{{item.name}}</li>
    </ul>
    <hr>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from '@/components/HelloVuex'
  import {
    INCREMENT,
    UPDATEINFO,
    UPDATEINFO1
  } from "@/store/mutation-types"
  export default {
    name: 'App',
    data() {
      return {
        msg: "hello app",
        counter: 0
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      add() {
        // 普通方式
        // this.$store.commit("increment")

        // vue官方推荐方式
        this.$store.commit(INCREMENT)
      },
      sub() {
        this.$store.commit("decrement")
      },
      addCount(count) {
        // 提交风格一，普通风格
        this.$store.commit("addCount", count)
      },
      subCount(count) {
        // 提交风格二，特殊风格
        this.$store.commit({
          "type": "subCount",
          count
        })
      },
      updateInfo(id) {
        this.$store.commit({
          type: UPDATEINFO,
          id: id
        })
      },
      updateInfo1(id) {
        this.$store.dispatch("aUpdateInfo", "asdf")
          .then((res) => {
            console.log(res)
          })
      },
      getagesapp(){
        this.$store.dispatch("getages","ffff")
        .then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style>
</style>
