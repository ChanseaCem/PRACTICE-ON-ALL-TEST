<template>
		<tab-bar>
      <tab-bar-item path="/home" activeColor="purple">
        <img slot="item-img" src="~assets/img/common/home_p.png" alt="">
        <img slot="item-img-active" src="~assets/img/common/home_n.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="purple">
        <img slot="item-img" src="~assets/img/common/category_p.png" alt="">
        <img slot="item-img-active" src="~assets/img/common/category_n.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop" activeColor="purple">
        <img slot="item-img" src="~assets/img/common/shc_p.png" alt="">
        <img slot="item-img-active" src="~assets/img/common/shc_n.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="purple">
        <img slot="item-img" src="~assets/img/common/my_p.png" alt="">
        <img slot="item-img-active" src="~assets/img/common/my_n.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
	const TabBar = () => import("./TabBar")
	const TabBarItem = () => import("./TabBarItem")
  export default {
    name: 'MainTabBar',
    components: {
			TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
