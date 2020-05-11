<template>
  <div id="app">
    <!-- 无使用 linkActiveClass -->
    <router-link to="/home" tag="button" replace active-class="active">home</router-link>
    <router-link to="/about" replace active-class="active">about</router-link>
    <router-link :to="'/about2/'+userid" replace>about2</router-link>

    <!-- 使用linkActiveClass -->
    <!-- <router-link to="/home" tag="button" replace>home</router-link>
    <router-link :to="'/about/'+userid" replace>about</router-link> -->

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="lazyClick">lazy</button>

    <router-link :to='{path:"/param",query:{"height":2,"bool":false}}' tag="button" replace>query参数传递</router-link>

    <button @click="profileClick">档案</button>
    <keep-alive exclude="ProFile">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userid: "userid"
      }
    },
    methods: {
      homeClick() {
        // this.$router.push("/home")
        this.$router.replace("/home")
      },
      aboutClick() {
        // console.log("aboutClick")
        // this.$router.push("/ ")
        this.$router.replace("/about")
      },
      userClick() {
        // console.log("动态路由：/user/"+this.userid)
        // this.$router.push("/about")
        this.$router.replace("/user/" + this.userid)
      },
      lazyClick() {
        this.$router.replace("/lazy")
      },
      profileClick() {
        this.$router.push({
          "path": "/proFile",
          "query": {
            "height": 55,
            "width": 22
          }
        })
      }
    }
  }
</script>

<style>
  .active {
    color: red;
  }
</style>
