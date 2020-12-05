<template>
  <div id="massage">
    <msg-header></msg-header>
    <contain-nav-bar>
      <mid-nav-bar :midNavBarClick="navClick" :navTitles="navTitles"></mid-nav-bar>
    </contain-nav-bar>
    <msg-list-item ref="asd" :msgList="msgList" :msgProp="msgProp" :msgType="msgType"></msg-list-item>
    <input type="text" ref="inp">
  </div>
</template>

<script>
  const MsgHeader = () => import("@/components/content/msg/msgChild/MsgHeader")
  const MsgListItem = () => import("@/components/content/msg/msgChild/MsgListItem")

  const MidNavBar = () => import("@/components/common/navbar/MidNavBar")
  const ContainNavBar = () => import("@/components/common/navbar/ContainNavBar")

  export default {
    name: "Msg",
    data() {
      return {
        msgType: 0,
        navTitles: {
          titles: ["物流", "系统"],
          No: [0, 1]
        },
        msgProp: {
          height: "42px",
          clamp: 3
        },
        msgList: []
      }
    },
    components: {
      MsgHeader,
      MsgListItem,
      MidNavBar,
      ContainNavBar
    },
    methods: {
      init() {
        this.navClick(0);
      },
      navClick(type) {
        let data1 = [{
          title: "系统公告",
          des: "公告：停服维护更新，给您造成的不便敬请谅解。本次更新将优化更多内容，敬请期待。",
          imgsrc: require("assets/img/home/home_img_cp1.png"),
          orderNum: "65464564644622655298",
          time: "2019-01-25 00:00:00"
        }, {
          title: "系统通知",
          des: "通知：系统将于2018年1月22日凌晨01:00停服维护更新，给您造成的不便敬请谅解。本次更新将优化更多内容，敬请期待。",
          imgsrc: require("assets/img/home/home_img_cp1.png"),
          orderNum: "1341w",
          time: "2018-01-25 00:00:00"
        }]
        let data0 = [{
          title: "物流通知",
          des: "通知：系统将于2018年1月22日凌晨01:00停服维护更新，给您造成的不便敬请谅解。本次更新将优化更多内容，敬请期待。",
          imgsrc: require("assets/img/home/home_img_cp5.png"),
          orderNum: "24522432",
          time: "2018-01-25 00:00:00"
        }, {
          title: "物流通知",
          des: "通知：明天将至",
          imgsrc: require("assets/img/home/home_img_cp5.png"),
          orderNum: "456756845",
          time: "2018-01-25 00:00:00"
        }, {
          title: "物流通知",
          des: "通知：明天将至2",
          imgsrc: require("assets/img/home/home_img_cp5.png"),
          orderNum: "1d242342",
          time: "2018-01-25 00:00:00"
        }, {
          title: "物流通知",
          des: "通知：明天将至3",
          imgsrc: require("assets/img/home/home_img_cp5.png"),
          orderNum: "wers",
          time: "2018-01-25 00:00:00"
        }, {
          title: "物流通知",
          des: "通知：明天将至4",
          imgsrc: require("assets/img/home/home_img_cp5.png"),
          orderNum: "23456esffs",
          time: "2018-01-25 00:00:00"
        }]

        this.msgType = type;
        if (type == 1) {
          this.msgList = data1;
        } else {
          this.msgList = data0
        }
      }
    },
    created() {
      this.init()
    },
    mounted() {
      this.$nextTick(() => {
        console.log(typeof this.$refs)
        console.log(this.$refs)
        console.log(this.$refs.asd)
        console.log(this.$refs.inp)
      })
      setTimeout(() => {
        console.log(this.$refs)
        console.log(this.$refs.asd)
        console.log(this.$refs.inp)
      },100)
    }
  }
</script>

<style>
  #massage {
    padding-top: 104px;
    padding-bottom: 50px;
  }
</style>
