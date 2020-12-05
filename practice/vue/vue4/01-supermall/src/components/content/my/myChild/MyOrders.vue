<template>
  <div class="myorders">
    <my-orders-title></my-orders-title>
    <Contain class="myorderlist">
      <div class="list-item">
        <div class="img"><img slot="img" src="~assets/img/common/pc_icon_unconfirmed.png" alt=""></div>
        <div class="txt"><span slot="txt">待付款</span></div>
        <div class="num" v-if="orderNums.numToPay!=0">
          <span slot="num">{{orderNums.numToPay}}</span>
        </div>
      </div>
      <div class="list-item">
        <div class="img"><img slot="img" src="~assets/img/common/pc_icon_dg.png" alt=""></div>
        <div class="txt"><span slot="txt">待发货</span></div>
        <div class="num" v-if="orderNums.numToSend!=0">
          <span slot="num">{{orderNums.numToSend}}</span>
        </div>
      </div>
      <div class="list-item">
        <div class="img"><img slot="img" src="~assets/img/common/pc_icon_delivered.png" alt=""></div>
        <div class="txt"><span slot="txt">待收货</span></div>
        <div class="num" v-if="orderNums.numToRev!=0">
          <span slot="num">{{orderNums.numToRev}}</span>
        </div>
      </div>
      <div class="list-item">
        <div class="img"><img slot="img" src="~assets/img/common/pc_icon_over.png" alt=""></div>
        <div class="txt"><span slot="txt">待评价</span></div>
        <div class="num" v-if="orderNums.numToComment!=0">
          <span slot="num">{{orderNums.numToComment}}</span>
        </div>
      </div>
    </Contain>

  </div>
</template>

<script>
  const MyOrdersTitle = () => import("@/components/content/my/myChild/MyOrdersTitle")
  const Contain = () => import("@/components/common/Contain")
  export default {
    name: "MyOrders",
    props: {
      orderNums: {
        type: Object,
        default () {
          return {
            numToPay: 0,
            numToSend: 0,
            numToRev: 0,
            numToComment: 0
          }
        }
      }
    },
    components: {
      MyOrdersTitle,
      Contain
    }
  }
</script>

<style>
  .myorders .myorderlist {
    display: flex;
    border-bottom: 8px solid #F2F2F2 !important;
  }

  .myorders .list-item {
    padding: 5px;
    height: 80px;
    position: relative;
    flex: 1;
  }

  .myorders .list-item .num {
    width: 13px;
    height: 13px;
    line-height: 13px;
    position: absolute;
    right: 20px;
    top: 15px;
    z-index: 2;
    background: red;
    color: white;
    border-radius: 50%;
    font-size: 11px;
    padding: 2px;
    text-align: center;
  }

  .myorders .list-item .img {
    position: relative;
    height: 40px;
    width: 40px;
    margin: 10px auto 0;
  }

  .myorders .list-item .img img {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
    width: auto;
    height: auto;
    max-width: 70%;
    max-height: 70%;
  }

  .myorders .list-item .txt {
    font-size: 12px;
    height: 15px;
    line-height: 15px;
    color: #333333;
    text-align: center;
  }
</style>
