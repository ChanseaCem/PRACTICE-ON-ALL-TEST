<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="styleColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:{
        type:String
      },
      activeColor:{
        type:String,
        default(){
          return "red"
        }
      }
    },
    data(){
      return{
        // isActive:false
        // activeColor1:this.activeColor
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      styleColor(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        if(this.$route.path!=this.path){
          this.$router.replace(this.path)
        }

      }
    }
  }
</script>

<style>
  .active{
    color: red;
  }
</style>
