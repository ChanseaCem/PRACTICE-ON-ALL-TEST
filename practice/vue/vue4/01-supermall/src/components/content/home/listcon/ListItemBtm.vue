<template>
  <div class="list-item-btm clear-fix">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ListItemBtm"
  }
</script>

<style>
  .list-item-btm {
    overflow-x: scroll;
    white-space: nowrap;
    padding: 8px 0;
    border-bottom: 8px solid #EEEEEE;
  }

  .list-item-btm::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
