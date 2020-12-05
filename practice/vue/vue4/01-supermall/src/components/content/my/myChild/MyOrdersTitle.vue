<template>
  <div class="myorderstitle">
    <div class="ct-con clear-fix">
      <div class="con-title">我的订单</div>
      <see-more slot="t-right" :seemore="seemore"></see-more>
    </div>
  </div>
</template>

<script>
  const SeeMore = () => import("components/common/more/SeeMore")
  export default {
    name: "MyOrders",
    components: {
      SeeMore
    },
    data() {
      return {
        seemore: {
          text: "查看全部订单",
          top: "14px",
          imgsrc: require("assets/img/common/arrow_chakan.png")
        }
      }
    }
  }
</script>

<style>
  .myorderstitle .contain {
    border-width: 2px;
  }

  .myorderstitle .ct-con {
    height: 40px;
    line-height: 40px;
    border-bottom: 2px solid #F2F2F2;
    /* padding: 5px 0; */
  }

  .myorderstitle .ct-con .con-title {
    float: left;
    margin-left: 15px;
    font-size: 14px;
  }

  .myorderstitle .ct-con .see-more {
    margin-right: 15px;
  }
</style>
