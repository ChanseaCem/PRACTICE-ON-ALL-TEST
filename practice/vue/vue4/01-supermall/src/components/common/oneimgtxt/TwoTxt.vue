<template>
  <div class="towtxt">
    <div class="txt1">
      <slot name="txt1"></slot>
    </div>
    <div class="txt2">
      <slot name="txt2"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TwoTxt"
  }
</script>

<style>
  .towtxt {
    padding: 5px;
    height: 55px;
    width: 80px;
    text-align: center;
    
    /* 默认float left */
    float: left;
    
    /* 备用，如果要用，在用这个组件的父层添加display flex */
    flex: 1;
  }

  .towtxt .txt1 {
    height: 30px;
    line-height: 30px;
    color: red;
  }

  .towtxt .txt2 {
    font-size: 12px;
    height: 15px;
    line-height: 15px;
    color: #333333;
  }
</style>
