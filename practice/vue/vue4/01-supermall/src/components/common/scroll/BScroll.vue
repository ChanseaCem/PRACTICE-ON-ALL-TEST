<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "BetterScroll",
    props: {
      probeType: {
        type: Number,
        default () {
          return 0
        }
      },
      pullUpLoad: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    data() {
      return {
        bs: null
      }
    },
    mounted() {
      /**
       * 默认的BScorll是不能实时监听滚动位置
       * 如果要实时监听，需要添加参数（第二个参数config）
       * probeType 侦测类型
       * 0,1都是实时侦测
       * 2.在手指滚动的过程中侦测
       * 3.只要是滚动都侦测
       */
      this.bs = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        click: true, //默认隔离原生事件，所以如果要启动事件需要修改为true
        eventPassthrough: "horizontal"
      })
      
      /**
       * 滚动监听
       */
      this.bs.on("scroll", (position) => {
        this.$emit("backtopclick", position);
      })

      /**
       * 上拉加载
       */
      this.bs.on("pullingUp", () => {
        this.$emit("pullingUp")
        this.bs.finishPullUp()
      })
      this.bs.scrollTo(0, 0)
    },
    methods:{
      refresh(){
        this.bs.refresh();
      }
    }
  }
</script>

<style>
  .wrapper {}
</style>
