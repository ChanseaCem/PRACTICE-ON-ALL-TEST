<template>
  <div class="homeyoulike">
    <div class="you-like">猜你喜欢</div>
  </div>
</template>

<script>
  export default {
    name: "HomeYouLike"
  }
</script>

<style>
  .homeyoulike {
    position: sticky;
    top: 44px;
    background: white;
  }

  .homeyoulike .you-like {
    width: 100%;
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: url("~assets/img/home/home_img_caini.png") no-repeat;
    background-size: 54%;
    background-position: center;
    font-size: 14px;
  }
</style>
