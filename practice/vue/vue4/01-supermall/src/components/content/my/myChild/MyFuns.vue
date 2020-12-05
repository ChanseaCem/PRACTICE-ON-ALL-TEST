<template>
  <div class="myfuns">
    <Contain>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_icon_qianbao.png" alt="">
        <span slot="txt">我的钱包</span>
      </up-img>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_icon_renzheng.png" alt="">
        <span slot="txt">实名认证</span>
      </up-img>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_ic_jiekuang.png" alt="">
        <span slot="txt">借款</span>
      </up-img>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_ic_dizhi.png" alt="">
        <span slot="txt">我的地址</span>
      </up-img>
    </Contain>
    <Contain>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_icon_liulan.png" alt="">
        <span slot="txt">浏览记录</span>
      </up-img>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_icon_ziliao.png" alt="">
        <span slot="txt">资料编辑</span>
      </up-img>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_icon_shouhou.png" alt="">
        <span slot="txt">售后维权</span>
      </up-img>
      <up-img>
        <img slot="img" src="~assets/img/common/pc_icon_zhuxiao.png" alt="">
        <span slot="txt">注销</span>
      </up-img>
    </Contain>
  </div>
</template>

<script>
  const UpImg = () => import("@/components/common/oneimgtxt/UpImg")
  const Contain = () => import("@/components/common/Contain")
  export default {
    name: "MyFuns",
    components: {
      UpImg,
      Contain
    }
  }
</script>

<style>
  .myfuns .contain {
    display: flex;
    border-bottom: 2px solid #F2F2F2 !important;
  }
</style>
