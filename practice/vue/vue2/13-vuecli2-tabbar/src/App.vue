<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_home.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_home_select.png" alt=""></div>
        <div slot="item-text">home</div>
      </tab-bar-item>
      <tab-bar-item path="/cat" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_money.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_money_select.png" alt=""></div>
        <div slot="item-text">cat</div>
      </tab-bar-item>
      <!-- <tab-bar-item path="/camara" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_money.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_money_select.png" alt=""></div>
        <div slot="item-text">camara</div>
      </tab-bar-item> -->
      <tab-bar-item path="/category" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_money.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_money_select.png" alt=""></div>
        <div slot="item-text">category</div>
      </tab-bar-item>
      <tab-bar-item path="/cate" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_money.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_money_select.png" alt=""></div>
        <div slot="item-text">cate</div>
      </tab-bar-item>
      <!-- <tab-bar-item path="/profile" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_trade.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_trade_select.png" alt=""></div>
        <div slot="item-text">我的</div>
      </tab-bar-item> -->
      <tab-bar-item path="/mine" activeColor="blue">
        <div slot="item-icon"><img src="@/assets/img/tabbar/tab_icon_business.png" alt=""></div>
        <div slot="item-icon-active"><img src="@/assets/img/tabbar/tab_icon_business_select.png" alt=""></div>
        <div slot="item-text">mine</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "@/components/tabbar/TabBar.vue"
  import TabBarItem from "@/components/tabbar/TabBarItem.vue"
  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import url("assets/css/base.css");
</style>
