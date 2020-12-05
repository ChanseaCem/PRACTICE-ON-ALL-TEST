<template>
  <div class="shopbtmbar">
    <div class="bar-left clear-fix">
      <div class="lf-check">
        <span class="check"></span><span class="txt">全选</span>
      </div>
      <div class="lf-total">
        <span class="total-tip">合计:</span>
        <span class="total-price">0</span>
      </div>
      <div class="lf-other">
        不含运费
      </div>
    </div>
    <div class="bar-right">
      <span>结算(0)</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopBtmBar"
  }
</script>

<style>
  .shopbtmbar {
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    height: 50px;
    line-height: 50px;
    background: white;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }

  .shopbtmbar .bar-left {
    flex: 1;
    padding-left: 15px;
    display: flex;
  }

  .shopbtmbar .bar-left .lf-check {
    width: 48px;
    font-size: 12px;
    position: relative;
  }

  .shopbtmbar .bar-left .lf-check .check {
    display: block;
    width: 14px;
    height: 14px;
    border: 1px solid #D2D2D2;
    border-radius: 50%;
    position: absolute;
    top: 16px;
  }

  .shopbtmbar .bar-left .lf-check .txt {
    margin-left: 20px;
  }

  .shopbtmbar .bar-left .lf-total {
    font-size: 13px;
    flex: 1;
  }

  .shopbtmbar .bar-left .lf-other {
    float: right;
    max-width: 50px;
    font-size: 10px;
    text-align: right;
    line-height: 40px;
    padding: 5px;
    color: #999999;
  }

  .shopbtmbar .bar-right {
    width: 100px;
    background: #e6373a;
    color: white;
    text-align: center;
  }
</style>
