<template>
  <div class="shoplist">
    <div class="shop-list-title clear-fix">
      <div class="tt-check float-left"><span class="check"></span></div>
      <div class="tt-txt float-left">{{datalist.title}}</div>
      <div class="tt-txt2 float-right">{{datalist.conpon.txt}}</div>
    </div>
    <div class="shop-list-item" v-for="(item,index) in datalist.list" :key="index">
      <div class="left">
        <span class="left-check"></span>
      </div>
      <div class="center">
        <img :src="item.imgsrc" alt="">
      </div>
      <div class="right">
        <div class="r-top">{{item.des}}</div>
        <div class="r-middle">{{item.checklist}}</div>
        <div class="r-btm clear-fix">
          <div class="btm-price">{{item.price | priceFilter}}</div>
          <div class="btm-num">
            <span class="sub">-</span>
            <input type="number" class="num" :value="item.num">
            <span class="add">+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopList",
    props: {
      datalist: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    components: {},
    created() {},
    mounted() {},
    filters: {
      priceFilter(price) {
        return "￥" + price.toFixed(2)
      }
    }
  }
</script>

<style>
  .shoplist {
    border-bottom: 8px solid #EEEEEE;
  }

  .shoplist .shop-list-title {
    height: 30px;
    padding: 0 15px;
    border-bottom: 1px solid #F2F2F2;
  }

  .shoplist .shop-list-title .tt-check {
    width: 25px;
    padding-top: 7px;
  }

  .shoplist .shop-list-title .check {
    display: block;
    width: 14px;
    height: 14px;
    border: 1px solid #D2D2D2;
    border-radius: 50%;
  }

  .shoplist .shop-list-title .tt-txt {
    line-height: 30px;
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
  }

  .shoplist .shop-list-title .tt-txt2 {
    font-size: 13px;
    line-height: 30px;
    color: red;
  }

  .shoplist .shop-list-item {
    display: flex;
    height: 100px;
    padding: 0 15px;
    border-bottom: 1px solid #F2F2F2;
  }

  .shoplist .shop-list-item .left {
    padding-top: 43px;
    width: 25px;
  }

  .shoplist .shop-list-item .left .left-check {
    display: block;
    width: 14px;
    height: 14px;
    border: 1px solid #DEDEDE;
    border-radius: 50%;
  }

  .shoplist .shop-list-item .center {
    width: 80px;
    position: relative;
  }

  .shoplist .shop-list-item .center img {
    display: block;
    width: auto;
    height: auto;
    max-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #EEEEEE;
  }

  .shoplist .shop-list-item .right {
    flex: 1;
    padding: 0 10px;
  }

  .shoplist .shop-list-item .right .r-top {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    height: 26px;
    font-size: 13px;
    margin-top: 12px;
  }

  .shoplist .shop-list-item .right .r-middle {
    font-size: 12px;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    height: 12px;
    margin: 9px 0;
  }

  .shoplist .shop-list-item .right .r-btm .btm-price {
    color: #e6373a;
    float: left;
    font-size: 13px;
    margin-top: 5px;
  }

  .shoplist .shop-list-item .right .r-btm .btm-num {
    float: right;
    display: flex;
    width: 90px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #d2d2d2;
  }

  .shoplist .shop-list-item .right .r-btm .btm-num span {
    display: inline-block;
    width: 15px;
    margin: 0 5px;
    text-align: center;
  }

  .shoplist .shop-list-item .right .r-btm .btm-num input {
    display: inline-block;
    width: 40px;
    text-align: center;
  }
</style>
