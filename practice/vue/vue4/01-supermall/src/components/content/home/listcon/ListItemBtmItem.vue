<template>
  <div class="list-item-btm-item">
    <slot name="img"></slot>
    <slot name="txt"></slot>
    <slot name="price"></slot>
  </div>
</template>

<script>
  export default {
    name: "ListItemBtmItem"
  }
</script>

<style>
  .list-item-btm-item {
    padding: 0 10px;
    display: inline-block;
    text-align: center;
    max-width: 104px;
  }

  .list-item-btm-item .img {
    width: 84px;
    height: 84px;
    position: relative;
    background: #EEEEEE;
  }

  .list-item-btm-item img {
    max-width: 84px;
    max-height: 84px;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  .list-item-btm-item .txt {
    font-size: 12px;
    color: #333333;
    padding: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .list-item-btm-item .price {
    color: #e6373a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
  }
</style>
