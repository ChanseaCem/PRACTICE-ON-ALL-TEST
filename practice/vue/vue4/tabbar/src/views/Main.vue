<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="img" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="img-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="img" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="img-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="img" src="@/assets/img/tabbar/cart.svg" alt="">
      <img slot="img-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="img" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="img-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "@/components/tabbar/TabBar.vue"
  import TabBarItem from "@/components/tabbar/TabBarItem.vue"
  export default {
    name: 'Main',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
