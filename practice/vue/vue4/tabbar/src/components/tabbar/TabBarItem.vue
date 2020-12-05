<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img-active"></slot>
    </div>
    <div :style="styleColor">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: {
        type: String
      },
      activeColor: {
        type: String,
        default:"green"
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        return this.$route.path === this.path
      },
      styleColor() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 13px;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: 8px;
  }
</style>
