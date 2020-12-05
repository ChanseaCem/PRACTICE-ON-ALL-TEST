<template>
  <div class="midnavbar nav">
    <ul class="nav-scr">
      <li v-for="(item,index) in navTitles.titles" :key="index">
        <span @click="change(index)" :class="{active:index==isActive}">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MidNavBar",
    props: {
      navTitles: {
        type: Object,
        default () {
          return {}
        }
      },
      midNavBarClick: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        isActive: 0
      }
    },
    components: {},
    computed: {},
    methods: {
      change(index) {
        this.isActive = index;
        if (this.midNavBarClick) {
          this.midNavBarClick(this.navTitles.No[index], 0)
        }
        // this.$emit("navClick", index)
      }
    }
  }
</script>

<style>
  .midnavbar.nav .nav-scr {
    overflow: scroll;
    white-space: nowrap;
    display: flex;
  }

  .midnavbar.nav .nav-scr>li {
    flex: 1;
    text-align: center;
    padding: 0 10px;
  }

  .midnavbar.nav .nav-scr>li span {
    line-height: 40px;
    display: inline-block;
    height: 40px;
    font-size: 15px;
    color: #333333;
  }

  .midnavbar.nav .nav-scr>li .active {
    border-bottom: solid 1px #e6373a;
    color: #e6373a;
  }

  .midnavbar ::-webkit-scrollbar {
    width: 0;
    height: 0
  }
</style>
