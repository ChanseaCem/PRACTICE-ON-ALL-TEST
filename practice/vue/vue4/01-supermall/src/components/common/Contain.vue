<template>
  <div class="contain clear-fix">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Contain"
  }
</script>

<style>
  .contain {
    padding: 8px 0;
    border-bottom: 8px solid #EEEEEE;
  }
</style>
