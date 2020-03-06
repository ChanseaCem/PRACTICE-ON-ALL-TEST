<template>
  <div>
    <slot></slot>
    <router-view />
  </div>
</template>

<script>
  export default {
    name:"FunList"
  }
</script>

<style>
  .h-nav {
      background: white;
      border-radius: 4px;
      height:85px;
      border: 1px solid transparent;
      padding: 15px 0;
      box-sizing: border-box;
      display: flex;
      width: 100%;
  }
</style>
