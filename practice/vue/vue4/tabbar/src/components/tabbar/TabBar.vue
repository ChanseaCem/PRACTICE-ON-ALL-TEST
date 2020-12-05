<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style>
  #tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #F6F6F6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    height: 49px;
  }
</style>
