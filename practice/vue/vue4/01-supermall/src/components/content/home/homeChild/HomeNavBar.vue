<template>
  <div class="homenavbar">
    <nav-bar :barStyles='styles'>
      <img slot="bar-left" class="l-logo" src="~assets/img/home/logo.png" alt="">
      <div slot="bar-center" class="c-con">
        <div v-if="isonfocus" class="con-inp">
          <input class="search" type="text" @blur="onblurClick" ref="inp">
        </div>
        <div v-else @click="inputclick()" class="con-inp inp-tips">
          <img class="search-img" src="~assets/img/common/search.png" alt="">
          <span class="search-text">搜索您想要的宝贝</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  const NavBar = () => import('@/components/common/navbar/NavBar')
  export default {
    name: 'HomeNavBar',
    components: {
      NavBar
    },
    data() {
      return {
        isonfocus: false,
        setI: null
      }
    },
    computed: {
      isShow() {
        return this.isonfocus
      },
      styles(){
        return {bleft:"70px",bgcolor:"#e6373a"}
      }
    },
    methods: {
      onblurClick() {
        console.log('onblurClick')
        const val = this.$refs.inp.value;
        if (!val) {
          this.isonfocus = false
        }
      },
      inputclick() {
        console.log('inputclick')
        this.isonfocus = true
        if (this.setI) {
          clearTimeout(this.setI)
        }
        this.setI = setTimeout(() => {
          console.log(this.$refs)
          this.$refs.inp.focus();
        })
      }
    }
  }
</script>

<style>
  .homenavbar .l-logo {
    width: 40px;
    height: 20px;
  }

  .homenavbar .c-con {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 7px;
  }

  .homenavbar .c-con .inp-tips {
    padding-top: 6px;
  }

  .homenavbar .c-con .con-inp {
    width: 95%;
    height: 30px;
    border-radius: 15px;
    background: #EC696B;
    box-sizing: border-box;
  }

  .homenavbar .c-con .con-inp .search {
    width: 90%;
    height: 100%;
    text-align: center;
    background: transparent;
    color: white;
  }

  .homenavbar .c-con .con-inp .search-img {
    width: 13px;
  }

  .homenavbar .c-con .con-inp .search-text {
    font-size: 13px;
    margin-left: 5px;
    color: white;
  }
</style>
