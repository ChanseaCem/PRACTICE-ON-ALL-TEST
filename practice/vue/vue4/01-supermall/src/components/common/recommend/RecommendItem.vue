<template>
  <div class="recommend-item reco-con float-left" :style='{width:recStyles.width}'>
    <div class="c-img" ref="cimg" :style='{width:recStyles.width}'>
      <slot name="re-img"></slot>
    </div>
    <div>
      <slot name="re-txt"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendItem",
    props: {
      recStyles: {
        type: Object,
        default () {
          return {
            width: 0
          }
        }
      }
    },
    mounted() {
      // 初始化图片大小
      const width = this.$refs.cimg.style.width.split("px")[0];
      const width_img = parseFloat(width) * 0.6 + "px"
      this.$slots['re-img'][0].elm.style.width = width_img
    }
  }
</script>

<style>
  .recommend-item {
    text-align: center;
    color: #666666;
    font-size: 13px;
    padding-top: 10px;
  }
</style>
