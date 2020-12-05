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
    data(){
      return {
        path:"/home/news"
      }
    },
    created() {
      console.log("Home created")
    },
    destroyed() {
      console.log("Home destroyed")
    },
    activated() {
      // activated,deactivated这两个函数只有在keep-alive使用的时候才会执行
      if(this.$route.path != this.path){
        this.$router.push(this.path)
      }else{
        console.log("冲突")
      }
    },
    deactivated() {
        console.log("deactivated")
    },
		// 组件内的导航
		beforeRouteLeave(to,from,next) {
			this.path = this.$route.path;
			next()
		}
  }
</script>

<style>
</style>
