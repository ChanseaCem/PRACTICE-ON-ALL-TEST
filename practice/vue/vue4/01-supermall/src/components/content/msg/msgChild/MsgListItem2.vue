<template>
  <div class="msglistitem">
    <div class="item-con">
      <div class="con-tt">系统公告</div>
      <div class="con-con">
        <div class="c-lf">
          <img src="~assets/img/home/home_img_cp5.png" alt="">
        </div>
        <div class="c-rt">
          通知：系统将于2018年1月22日凌晨01:00停服维
          护更新，给您造成的不便敬请谅解。本次更新将优
          化更多内容，敬请期待。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"MsgListItem"
  }
</script>

<style>
  .msglistitem .item-con{
    border: 8px solid #EEEEEE;
    border-width: 0 10px 10px 10px;
    padding: 8px 15px;
  }
  .msglistitem .item-con .con-tt{
    font-size: 15px;
  }
  .msglistitem .item-con .con-con {
    display: flex;
  }
  .msglistitem .item-con .con-con .c-lf{
    width: 60px;
    height: 60px;
    position: relative;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  .msglistitem .item-con .con-con .c-lf img{
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  .msglistitem .item-con .con-con .c-rt{
    flex: 1;
    margin: 15px 0 0 15px;
    height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-size: 14px;
  }
</style>
