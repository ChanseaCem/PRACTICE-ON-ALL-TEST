<template>
  <div>
    <h2>我是用户</h2>
    <p>{{getuserid}}</p>
    <p>{{$route.params.userid}}</p>
  </div>
</template>

<script>
  export default {
    name:"User",
    computed:{
      getuserid(){
        // console.log(this.$route)
        // $route,这个时候拿到的是处于激活时候的路由
        return this.$route.params.userid
      }
    },
    created() {
      console.log("User created")
    },
    destroyed() {
      console.log("User destroyed")
    }
  }
</script>

<style>
  .fontsize{
    font-size: 18px;
  }
</style>
