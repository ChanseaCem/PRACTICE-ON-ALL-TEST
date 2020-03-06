<template>
  <div>
    <h2>我是home</h2>
    <small>嵌套路由</small>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/msg">消息</router-link>
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  export default {
    name: "Home",
    created() {
      console.log("Home created")
    },
    destroyed() {
      console.log("Home destroyed")
    },
    activated() {
      // activated,deactivated这两个函数只有在keep-alive使用的时候才会执行
    },
    deactivated() {

    }
  }
</script>

<style>
</style>
