<template>
  <div class="shopnavbar">
    <nav-bar :style="styles">
      <div slot="bar-left">
      </div>
      <div class="nav-c" slot="bar-center">
        购物车
      </div>
      <div slot="bar-right">
        <img class="rt-img" src="~assets/img/common/sh_btn_delete.png" alt="">
      </div>
    </nav-bar>
  </div>
</template>

<script>
  const NavBar = () => import("@/components/common/navbar/NavBar")
  export default {
    name: "ShopNavBar",
    components: {
      NavBar
    },
    computed: {
      styles() {
        return {
          background: "#f2f2f2"
        }
      }
    }
  }
</script>

<style>
  .shopnavbar .rt-img {
    width: 18px;
  }

  .shopnavbar .nav-c {
    line-height: 44px;
    color: #333333;
  }
</style>
