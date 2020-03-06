<template>
  <div class="tab-abr-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "red"
      }
    },
    data() {
      return {
        // isActive:true
      }
    },
    computed: {
      isActive() {
        console.log(234)
        return this.$route.path  === this.path
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods: {
      itemClick() {
        console.log(234)
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-abr-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 0.8125rem;
  }

  .tab-abr-item img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
    /* vertical-align: middle; */
  }
</style>
