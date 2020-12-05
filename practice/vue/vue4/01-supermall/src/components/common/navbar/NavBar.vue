<template>
  <div class="nav-bar" :style='{background:barStyles.bgcolor}'>
    <div class="bar-left" :style='{width:barStyles.bleft}'>
      <slot name="bar-left"></slot>
    </div>
    <div class="bar-center">
      <slot name="bar-center"></slot>
    </div>
    <div class="bar-right" :style='{width:barStyles.bright}'>
      <slot name="bar-right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      barStyles: {
        type: Object,
        default () {
          return {
            bleft: "40px",
            bright: "40px",
            bgcolor: "#f2f2f2"
          }
        }
      }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
      
    }
  }
</script>

<style>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .3);
  }

  .nav-bar .bar-center {
    flex: 1;
    text-align: center;
    color: white;
  }

  .nav-bar .bar-left,
  .nav-bar .bar-right {
    text-align: center;
    line-height: 44px;
  }
</style>
