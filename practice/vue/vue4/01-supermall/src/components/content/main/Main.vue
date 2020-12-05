<template>
  <div class="main">
    <router-view></router-view>
    <tab-bar class="footer">
      <tab-bar-item class="footer-item" path="/home">
        <img slot="item-active" src="~assets/img/common/home_p.png" alt="">
        <img slot="item-unactive" src="~assets/img/common/home_n.png" alt="">
        <p slot="item-text">主页</p>
      </tab-bar-item>
      <tab-bar-item class="footer-item" path="/category">
        <img slot="item-active" src="~assets/img/common/category_p.png" alt="">
        <img slot="item-unactive" src="~assets/img/common/category_n.png" alt="">
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item class="footer-item" path="/msg">
        <img slot="item-active" src="~assets/img/common/msg_p.png" alt="">
        <img slot="item-unactive" src="~assets/img/common/msg_n.png" alt="">
        <p slot="item-text">消息</p>
      </tab-bar-item>
      <tab-bar-item class="footer-item" path="/shop">
        <img slot="item-active" src="~assets/img/common/shc_p.png" alt="">
        <img slot="item-unactive" src="~assets/img/common/shc_n.png" alt="">
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item class="footer-item" path="/my">
        <img slot="item-active" src="~assets/img/common/my_p.png" alt="">
        <img slot="item-unactive" src="~assets/img/common/my_n.png" alt="">
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  const TabBar = () => import('@/components/common/tabbar/TabBar')
  const TabBarItem = () => import('@/components/common/tabbar/TabBarItem')
  export default {
    name: 'Main',
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {
    },
    mounted() {
    }
  }
</script>

<style>
</style>
