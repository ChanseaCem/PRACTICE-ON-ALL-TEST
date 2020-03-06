<template>
  <div @click="btnClick">
    <slot name="item-list"></slot>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "FunListItem",
    props:{
      path:String
    },
    methods:{
      btnClick(){
        if(this.path){
          this.$router.push("/home"+this.path)
        }
      }
    }
  }
</script>

<style>
  .n-con {
    text-align: center;
    flex: 1;
  }

  .n-con img {
    height: 30px;
    width: 30px;
  }

  .n-con .c-l p {
    font-size: 14px;
  }
</style>
