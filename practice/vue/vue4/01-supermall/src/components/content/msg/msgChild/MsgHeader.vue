<template>
  <div class="msgheader">
    <nav-bar :style='styles'>
      <div slot="bar-left"></div>
      <div class="msgnav-c" slot="bar-center">消息</div>
      <div slot="bar-right"></div>
    </nav-bar>
  </div>
</template>

<script>
  const NavBar = () => import("@/components/common/navbar/NavBar")
  export default {
    name: "MsgHeader",
    components: {
      NavBar
    },
    computed: {
      styles() {
        return {
          background: "#f2f2f2",
          color: "#333333"
        }
      }
    }
  }
</script>

<style>
  .msgheader .msgnav-lf-img {
    width: 10px;
  }

  .msgheader .msgnav-c {
    line-height: 44px;
    color: #333333
  }
</style>
