<template>
  <div id="backtotop">
    <img src="../../assets/img/common/backTop.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackToTop"
  }
</script>

<style>
  #backtotop {
    position: fixed;
    right: 10px;
    bottom: 55px;
    background: white;
    border-radius: 50%;
  }

  #backtotop img {
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: auto;
  }
</style>
