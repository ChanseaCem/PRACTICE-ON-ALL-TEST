<template>
	<div id="tabbar" :style="bgcolorStyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    bgcolor:{
      type:String,
      default:"#EBEBEB"
    }
  },
  computed:{
    bgcolorStyle(){
      console.log(this.bgcolor)
      return {background:this.bgcolor}
    }
  }
}
</script>

<style scoped>
  #tabbar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #EBEBEB;
    box-shadow: 0 -1px 1px rgba(100,100,100,.4);
  }
</style>
