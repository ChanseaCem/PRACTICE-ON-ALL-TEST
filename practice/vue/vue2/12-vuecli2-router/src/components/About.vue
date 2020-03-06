<template>
  <div>
    <h2>我是about</h2>
    <p>keep-alive是为了不让组件频繁的销毁和组建</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    created() {
      console.log("About created")
    },
    destroyed() {
      console.log("About destroyed")
    }
  }
</script>

<style>
</style>
