<template>
  <div class="list-item-top clear-fix">
    <slot name="t-left"></slot>
    <slot name="t-right"></slot>
  </div>
</template>

<script>
  export default {
    name:"ListItemTop"
  }
</script>

<style>
  .list-item-top{
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
  }
</style>
