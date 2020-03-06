<template>
  <div>
    <h2>档案</h2>
    <p><span>$route.query:</span>{{$route.query}}</p>
  </div>
</template>

<script>
  export default {
    name:"ProFile",
    created() {
      console.log("ProFile created")
    },
    destroyed() {
      console.log("ProFile destroyed")
    }
  }
</script>

<style>
</style>
