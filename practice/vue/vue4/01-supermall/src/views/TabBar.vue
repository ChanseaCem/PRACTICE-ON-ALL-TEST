<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style>
  #tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #F2F2F2;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    height: 49px;
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 6px;
    vertical-align: middle;
  }
</style>
