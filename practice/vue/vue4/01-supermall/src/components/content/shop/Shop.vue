<template>
  <div id="shop">
    <shop-nav-bar></shop-nav-bar>
    <shop-list v-for="(item,index) in datalist" :datalist="item" :key="index"></shop-list>
    <shop-btm-bar></shop-btm-bar>
  </div>
</template>

<script>
  const ShopNavBar = () => import("@/components/content/shop/shopChild/ShopNavBar")
  const ShopList = () => import("@/components/content/shop/shopChild/ShopList")
  const ShopBtmBar = () => import("@/components/content/shop/shopChild/ShopBtmBar")
	
  export default {
    name: "Shop",
    props: {
      datalist: {
        type: Array,
        default () {
          return [{
            title: "charleskeith箱包旗舰店",
            conpon: {
              have: true,
              txt: "领券"
            },
            list: [{
              des: "CHARLES＆KEITH 凯莉包 CK2-50270038 欧美简约手提包单肩包",
              imgsrc: require("assets/img/home/home_img_cp5.png"),
              checklist: "颜色分类：乳白色； 尺码：36/S颜色分类：乳白色； 尺码：36/S颜色分类：乳白色； 尺码：36/S",
              price: 199,
              num: 10
            }, {
              des: "包 CK2-50270038 欧美简约手提包包",
              imgsrc: require("assets/img/home/home_img_cp2.png"),
              checklist: "颜色分类：灰色； ",
              price: 199,
              num: 10
            }]
          }, {
            title: "机械师旗舰店",
            conpon: {
              have: true,
              txt: "领券"
            },
            list: [{
              des: " 机械师F117-V B1九代英特尔酷睿i7全面屏游戏本学生吃鸡GTX1650 4G独显笔记本电脑官方旗舰店",
              imgsrc: require("assets/img/common/prod3.png"),
              checklist: "尺码：36/S颜色分类：乳白色； 尺码：36/S颜色分类：乳白色； 尺码：36/S",
              price: 1199,
              num: 1
            }]
          }, {
            title: "charleskeith箱包旗舰店",
            conpon: {
              have: true,
              txt: ""
            },
            list: [{
              des: "CHARLES＆KEITH手提包CK2-50150617斜挎单肩女包新娘婚包",
              imgsrc: require("assets/img/common/prod1.png"),
              checklist: "颜色分类：乳白色； ",
              price: 12999,
              num: 1
            }, {
              des: "CHARLES＆KEITH信封包CK2-90680630翻盖单肩邮差信封斜挎包",
              imgsrc: require("assets/img/common/prod2.png"),
              checklist: "颜色分类：白色； ",
              price: 9999,
              num: 1
            }, {
              des: "CHARLES欧美简约手提包单肩包",
              imgsrc: require("assets/img/common/prod1.png"),
              checklist: "颜色分类：白色； ",
              price: 9999,
              num: 1
            }]
          }]
        }
      }
    },
    data() {
      return {
        datalisttest: []
      }
    },
    components: {
      ShopNavBar,
      ShopList,
      ShopBtmBar
    },
    created() {
      const datalist = [{
        title: "charleskeith箱包旗舰店",
        list: [{
          des: "",
          checklist: "颜色分类：乳白色； 尺码：36/S颜色分类：乳白色； 尺码：36/S颜色分类：乳白色； 尺码：36/S",
          price: 199,
          num: 10
        }]
      }]
      this.datalisttest = datalist;
    },
    mounted() {
      console.log(this.datalisttest)
    }
  }
</script>

<style>
  #shop {
    padding-top: 45px;
    padding-bottom: 100px;
  }
</style>
