<template>
  <div class="mydiscounts">
    <Contain>
      <two-txt>
        <span slot="txt1">{{discountsNum.numToProd}}</span>
        <span slot="txt2">商品收藏</span>
      </two-txt>
      <two-txt>
        <span slot="txt1">{{discountsNum.numToShop}}</span>
        <span slot="txt2">店铺收藏</span>
      </two-txt>
      <two-txt>
        <span slot="txt1">{{discountsNum.numToTuan}}</span>
        <span slot="txt2">我的团购</span>
      </two-txt>
      <two-txt>
        <span slot="txt1">{{discountsNum.numToTuan}}</span>
        <span slot="txt2">我的购物券</span>
      </two-txt>
    </Contain>
  </div>
</template>

<script>
  const TwoTxt = () => import("@/components/common/oneimgtxt/TwoTxt")
  const Contain = () => import("@/components/common/Contain")
  export default {
    name: "MyDiscounts",
    props: {
      discountsNum: {
        type: Object,
        default () {
          return {
            numToProd: 0,
            numToShop: 0,
            numToTuan: 0,
            numToCoupon: 0
          }
        }
      }
    },
    components: {
      Contain,
      TwoTxt
    }
  }
</script>

<style>
  .mydiscounts .contain {
    display: flex;
  }
</style>
