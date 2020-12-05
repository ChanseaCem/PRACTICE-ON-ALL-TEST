<template>
  <div class="list-item-top-title float-left">
    <slot name="txt"></slot>
  </div>
</template>

<script>
  export default {
    name: "ListItemTopTitle"
  }
</script>

<style>
  .list-item-top-title {
    position: relative;
  }

  .list-item-top-title::after {
    content: "";
    display: block;
    width: 3px;
    height: 16px;
    position: absolute;
    left: 0px;
    top: 12px;
    background: #5dc015;
  }

  .list-item-top-title .tt-txt {
    margin-left: 14px;
    color: #333333;
  }
</style>
