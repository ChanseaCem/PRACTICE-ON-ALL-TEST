<template>
  <div id="home">
    <home-nav-bar></home-nav-bar>
    <better-scroll class="home-content" ref="bscroll" :probe-type="3" :pull-up-load="true" @backtopclick="backtopclick" @pullingUp="loadmore">
      <home-recommend></home-recommend>
      <home-list-item :dataList="dataList[0]"></home-list-item>
      <home-ads></home-ads>
      <home-list-item :dataList="dataList[1]"></home-list-item>
      <home-list-item :dataList="dataList[0]"></home-list-item>
      <!-- <home-you-like></home-you-like> -->
      <mid-nav-bar class="positionfixed" ref="midnavbar" :navTitles="navTitles" :midNavBarClick="getHomelistitemsInit"></mid-nav-bar>
      <home-contain :datalist="showGoods"></home-contain>
    </better-scroll>
    <back-to-top @click.native="backToTop" v-show="isShowBackTop"></back-to-top>

  </div>
</template>

<script>
  const HomeNavBar = () => import('components/content/home/homeChild/HomeNavBar')
  const HomeRecommend = () => import('components/content/home/homeChild/HomeRecommend')
  const HomeListItem = () => import('components/content/home/homeChild/HomeListItem')
  const HomeAds = () => import('components/content/home/homeChild/HomeAds')
  // const HomeYouLike = () => import('components/content/home/homeChild/HomeYouLike')
  const HomeContain = () => import('components/content/home/homeChild/HomeContain')

  const MidNavBar = () => import("@/components/common/navbar/MidNavBar")
  const BetterScroll = () => import("@/components/common/scroll/BScroll")
  const BackToTop = () => import("@/components/common/BackToTop")


  import {debounce} from "common/utils"

  import {
    getHomelistitems
  } from "@/network/home"

  import {
    homeDatalist
  } from '@/assets/datas/homeDatalist'

  export default {
    name: "Home",
    data() {
      return {
        currentType: "pop",
        dataList: homeDatalist,
        goods: {
          "pop": {
            "page": 0,
            "list": []
          },
          "sell": {
            "page": 0,
            "list": []
          },
          "new": {
            "page": 0,
            "list": []
          }
        },
        navTitles: {
          titles: ["新款", "流行", "精选"],
          No: ["new", "pop", "sell"]
        },
        isShowBackTop: false,
        midNavOffSetTop:0
      }
    },
    components: {
      HomeNavBar,
      HomeRecommend,
      HomeListItem,
      HomeAds,
      // HomeYouLike,
      HomeContain,
      MidNavBar,
      BetterScroll,
      BackToTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 加载更多
       */
      loadmore(){
        this.getHomelistitems2(this.currentType,this.goods[this.currentType].page)
      },
      /**返回顶部
       * @param {Object} position
       */
      backtopclick(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      /**
       * 点击宝贝导航初始化请求数据
       * @param {Object} type
       * @param {Object} pageNum
       */
      getHomelistitemsInit(type, pageNum) {
        this.currentType = type;
        getHomelistitems(type, pageNum).then(res => {
          this.goods[type].list = res.data[type].list;
        }).catch(err => {
          console.log(err)
        })
      },
      /**
       * 宝贝下拉请求数据
       * @param {Object} type
       * @param {Object} pageNum
       */
      getHomelistitems2(type, pageNum) {
        this.currentType = type;
        let goods = this.goods;
        let page = pageNum || goods[type].page;

        getHomelistitems(type, page).then(res => {
          // console.log(JSON.stringify(res))
          goods[type].list.push(...res.data[type].list)
          goods[type].page = page + 1;
          this.goods = goods;
        }).catch(err => {
          console.log(err)
        })
      },
      /**
       * 返回顶部
       */
      backToTop() {
        this.$refs.bscroll.bs.scrollTo(0, 0, 1000)
      }
    },
    created() {
    },
    beforeMount() {

    },
    mounted() {
      this.getHomelistitems2("new");

      /**
       * 用总线方式
       * 1.在main.js的prototype加上$bus
       * 2.去HomeContain发送事件
       * 3.在这里接收事件
       */
      // this.$bus.$on("itemImgload",() => {
      //   this.$refs.bscroll.refresh();
      // })
      console.log(this.$refs.inputref)

      this.$nextTick(() => {
        console.log(this.$refs)
        console.log(this.$refs.inputref)
      })

      setTimeout(() => {
        console.log(this.$refs)
        console.log(this.$refs.inputref)
      },10)

      

      /**
       * this.$refs.bscroll报错undefined，所以需要加上异步，而且是大于等于100（原因尚不知）
       */
			setTimeout(() => {
				debounce(this.$refs.bscroll.refresh,500)()

        /**
         * midnav的吸顶效果
         */
        console.log(this.$refs.midnavbar.$el.offsetTop)
			},500)
    }
  }
</script>

<style>
  @import url("~assets/css/home.css");
</style>
