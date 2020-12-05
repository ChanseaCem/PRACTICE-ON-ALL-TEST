<template>
  <div class="myhead">
    <div class="head-top clear-fix">
      <img src="~assets/img/common/set.png" alt="">
    </div>
    <div class="head-btm clear-fix">
      <div class="btm-lf">
        <div class="lf-headimg">
          <img src="~assets/img/home/home_img_zixun.png" alt="">
        </div>
        <div class="lf-name"><p>小王子的玫瑰小王子的玫瑰</p></div>
        <div class="lf-vip">
          <p><span>普通用户</span></p>
        </div>
      </div>
      <div class="btm-rt">
        <p class="rt-list">
          <span class="l-tip">累计分红收益:</span>
          <span class="l-fuhao">￥</span>
          <span>0</span>
        </p>
        <p class="rt-list">
          <span class="l-tip">累计分享奖金收益:</span>
          <span class="l-fuhao">￥</span>
          <span>0</span>
        </p>
        <p class="rt-list">
          <span class="l-tip">累计育成奖金收益:</span>
          <span class="l-fuhao">￥</span>
          <span>0</span>
        </p>
        <p class="rt-list">
          <span class="l-tip">累计销售佣金收益:</span>
          <span class="l-fuhao">￥</span>
          <span>0</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"MyHead"
  }
</script>

<style>
  .myhead{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    height: 170px;
    background-image: linear-gradient(-42deg,
      #fe2d64 0%,
      #fe395a 26%,
      #fd454f 51%,
      #ff5b3f 100%);
  }
  .myhead .head-top{
    padding-top: 10px;
  }
  .myhead .head-top img{
    height: 24px;
    width: 24px;
    float: right;
    margin-right: 15px;
  }
  .myhead .head-btm .btm-lf{
    width: 110px;
    float: left;
  }
  .myhead .head-btm .btm-lf .lf-headimg{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:5px solid #FF9C8C;
    margin: auto;
  }
  .myhead .head-btm .btm-lf .lf-headimg img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .myhead .head-btm .btm-lf .lf-name{
    color: white;
    text-align: center;
    padding: 0 15px;
  }
  .myhead .head-btm .btm-lf .lf-name p{
    max-width: 80px;
    height: 14px;
    font-size: 14px;
    margin: 8px auto;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .myhead .head-btm .btm-lf .lf-vip{
    /* width: 70px;
    height: 18px;
    line-height: 18px;
    border-radius: 14px;
    border: 1px solid #fdc0b9;
    margin: auto;
    text-align: center;
    color: white;
    font-size: 11px; */
  }

  /*
  对此的修饰（上下居中）原理尚不清楚
  https://blog.csdn.net/weixin_30894583/article/details/94979334?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task
  */
  .myhead .head-btm .btm-lf .lf-vip p{
    position: absolute;
    top: 110px;
    left: -50px;
    border-radius: 14px;
    border: 1px solid #fdc0b9;
    text-align: center;
    color: white;
    display: table;
    width: 140px;
    height: 36px;
    line-height: 36px;
    font-size: 22px;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .myhead .head-btm .btm-lf .lf-vip p span {
    display: table-cell;
    vertical-align: middle;
  }
  .myhead .head-btm .btm-rt{
    float: left;
  }
  .myhead .head-btm .btm-rt .rt-list{
    font-size: 11px;
    color: #ffffff;
    max-width: 190px;
    line-height: 24px;
  }
  .myhead .head-btm .btm-rt .rt-list .l-tip{
    display: inline-block;
    width: 100px;
    text-align: right;
  }
  .myhead .head-btm .btm-rt .rt-list .l-fuhao{
    font-size: 11px;
  }
</style>
