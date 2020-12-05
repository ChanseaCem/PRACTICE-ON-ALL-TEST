<template>
  <div class="containnavbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "ContainNavBar",
    props: {},
    data() {
      return {}
    },
    components: {},
    computed: {},
    methods: {}
  }
</script>

<style>
  .containnavbar .nav {
    position: fixed;
    top: 44px;
    background: white;
    width: 100%;
    z-index: 1;
    border-top: 8px solid #EEEEEE;
    border-bottom: 8px solid #EEEEEE;
  }
</style>
