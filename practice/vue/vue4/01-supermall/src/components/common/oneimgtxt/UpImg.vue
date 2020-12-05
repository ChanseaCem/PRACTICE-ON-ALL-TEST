<template>
  <div class="upimg">
    <div class="img">
      <slot name="img"></slot>
    </div>
    <div class="txt">
      <slot name="txt"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UpImg"
  }
</script>

<style>
  .upimg {
    padding: 5px;
    height: 80px;
    width: 80px;
    position: relative;
    /* 默认float left */
    float: left;

    /* 备用，如果要用，在用这个组件的父层添加display flex */
    flex: 1;
  }

  .upimg .img {
    position: relative;
    height: 40px;
    width: 40px;
    margin: 10px auto 0;
  }

  .upimg .img img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: auto;
    height: auto;
    max-width: 70%;
    max-height: 70%;
  }

  .upimg .txt {
    font-size: 12px;
    height: 15px;
    line-height: 15px;
    color: #333333;
    text-align: center;
  }
</style>
