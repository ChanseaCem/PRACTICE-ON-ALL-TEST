<template>
  <div class="homerecommend">
    <Recommend>
      <recommend-item :recStyles='styles'>
        <img ref="reimg" slot="re-img" src="~assets/img/home/home_ic_xinren.png" alt="">
        <p slot="re-txt">新人专区</p>
      </recommend-item>
      <recommend-item :recStyles='styles'>
        <img ref="reimg" slot="re-img" src="~assets/img/home/home_ic_yugou.png" alt="">
        <p slot="re-txt">预购专区</p>
      </recommend-item>
      <recommend-item :recStyles='styles'>
        <img ref="reimg" slot="re-img" src="~assets/img/home/home_ic_pingou.png" alt="">
        <p slot="re-txt">拼购专区</p>
      </recommend-item>
      <recommend-item :recStyles='styles'>
        <img ref="reimg" slot="re-img" src="~assets/img/home/home_ic_gengduo.png" alt="">
        <p slot="re-txt">更多分类</p>
      </recommend-item>
    </Recommend>
  </div>
</template>

<script>
  const Recommend = () => import("components/common/recommend/Recommend")
  const RecommendItem = () => import("components/common/recommend/RecommendItem")
  export default {
    name:"HomeRecommend",
    components:{
      Recommend,
      RecommendItem
    },
    computed:{
      styles(){
        const w = window.screen.width/4;
        return {
          width:w+"px"
        }
      }
    },
    methods:{
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style>
</style>
