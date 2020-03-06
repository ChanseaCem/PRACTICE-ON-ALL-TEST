<template>
  <div class="tab-bar-item" @click="itemClick">
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
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default:"#333333"
      }
    },
    computed: {
      isActive() {
        return this.$route.path === this.path
      },
      activeStyle(){
        return this.isActive ? {color:"#c49d5c"} : {}
      }
    },
    methods: {
      itemClick() {
        if(!this.isActive){
          this.$router.push(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 0.8125rem;
  }

  .tab-bar-item img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
