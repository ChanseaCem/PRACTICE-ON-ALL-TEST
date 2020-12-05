<template>
  <div class="conitem clear-fix">
    <slot name="img"></slot>
    <slot name="txt"></slot>
    <slot name="price"></slot>
  </div>
</template>

<script>
  export default {
    name: "ConItem"
  }
</script>

<style>
  .conitem {
    width: 48%;
    padding-bottom: 8px;
  }

  .conitem:nth-child(2n+1) {
    float: left;
  }

  .conitem:nth-child(2n) {
    float: right;
  }

  .conitem .img {
    min-height: 149px;
    max-height: 200px;
  }

  .conitem .img img {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity .3s ease-in;
  }

  .conitem .txt {
    box-sizing: border-box;
    width: 100%;
    height: 31px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #333333;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;
  }

  .conitem .price {
    color: red;
    padding-left: 10px;
  }

  .conitem .price .p-backend {
    font-size: 13px;
  }
</style>
