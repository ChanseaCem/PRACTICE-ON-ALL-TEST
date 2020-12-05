<template>
  <div class="see-more float-right">
    <span class="more-txt">{{seemore.text}}</span>
    <img :style="{top:seemore.top}" :src="seemore.imgsrc" alt="">
  </div>
</template>

<script>
  export default {
    name: "SeeMore",
    props: {
      seemore: {
        type: Object,
        default () {
          return {
            text: "查看更多",
            top: "15px",
            imgsrc: require("assets/img/common/arrow_m.png")
          }
        }
      }
    }
  }
</script>

<style>
  .see-more {
    font-size: 11px;
    color: #999999;
    position: relative;
  }

  .see-more img {
    height: 10px;
    position: absolute;
    right: 0;
    vertical-align: middle;
  }

  .see-more .more-txt {
    margin-right: 10px;
  }
</style>
