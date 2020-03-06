<template>
    <tab-bar bgcolor="#eee">
      <tab-bar-item path="/home" activeColor="#c49d5c">
        <img slot="item-icon" src="@/assets/img/tabbar/tab_btn_caifu_n.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab_btn_caifu_p.png" alt="">
        <div slot="item-text">Home</div>
      </tab-bar-item>
      <tab-bar-item path="/caifu" activeColor="#c49d5c">
        <img slot="item-icon" src="@/assets/img/tabbar/tab_btn_caifu_n.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab_btn_caifu_p.png" alt="">
        <div slot="item-text">Wealth</div>
      </tab-bar-item>
      <tab-bar-item path="/pengyou" activeColor="#c49d5c">
        <img slot="item-icon" src="@/assets/img/tabbar/tab_btn_caifu_n.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab_btn_caifu_p.png" alt="">
        <div slot="item-text">Friends</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="#c49d5c">
        <img slot="item-icon" src="@/assets/img/tabbar/tab_btn_caifu_n.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/tab_btn_caifu_p.png" alt="">
        <div slot="item-text">Profile</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "@/components/tabbar/tabbar.vue"
  import TabBarItem from "@/components/tabbar/tabbarItem.vue"
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
