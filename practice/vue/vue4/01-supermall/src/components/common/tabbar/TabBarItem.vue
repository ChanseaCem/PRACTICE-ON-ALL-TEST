<template>
  <div @click="btnClick()">
    <div v-if="!isActive">
      <slot name="item-active"></slot>
    </div>
    <div v-else>
      <slot name="item-unactive"></slot>
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

      }
    },
    computed: {
      isActive() {
        return this.$route.path !== this.path
      },
      activeStyle() {
        return !this.isActive ? {
          color: "red"
        } : {}
      }
    },
    methods: {
      btnClick() {
        if (this.isActive) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style>
  .footer .footer-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .footer .footer-item img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
    margin-bottom: 3px;
  }
</style>
