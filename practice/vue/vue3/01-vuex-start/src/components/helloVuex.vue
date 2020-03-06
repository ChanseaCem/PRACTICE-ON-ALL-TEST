<template>
  <div>
    <p>{{title}}</p>
    {{msg}}
    {{$store.state.counter}}
    <p>{{$store.getters.thenDates()}}</p>
    <hr>
    <p>{{$store.getters.thenDates("2006-05-00")}}</p>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    data() {
      return {
        title:"helloVuex",
        msg:"conter:"
      }
    }
  }
</script>

<style>
</style>
