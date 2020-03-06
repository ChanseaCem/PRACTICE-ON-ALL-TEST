<template>
  <div id="app">
    <router-view />
    <Main></Main>
  </div>
</template>

<script>
  import Main from "@/components/Main.vue"
  export default {
    name: 'App',
    components: {
      Main
    }
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>
