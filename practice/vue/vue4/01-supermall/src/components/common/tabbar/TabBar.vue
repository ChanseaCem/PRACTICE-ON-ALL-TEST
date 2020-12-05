<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style>
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background: #EEEEEE;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .3);
  }
</style>
