<template>
  <div class="homelistitem" v-cloak>
    <list-item-top>
      <list-item-top-title slot="t-left">
        <span slot="txt" class="tt-txt">{{dataList.title}}</span>
      </list-item-top-title>
      <see-more slot="t-right"></see-more>
    </list-item-top>
    <list-item-btm>
      <list-item-btm-item v-for="(item,index) in dataList.list" :key='"item"+index'>
        <div class="img" slot="img">
          <img :src='item.imgsrc' alt="">
        </div>
        <p class="txt" slot="txt">{{item.des}}</p>
        <p class="price" slot="price">
          <span>{{item.price | showPrice}}</span>
        </p>
      </list-item-btm-item>
    </list-item-btm>
  </div>
</template>

<script>
  const ListItemTop = () => import("components/content/home/listcon/ListItemTop")
  const SeeMore = () => import("components/common/more/SeeMore")
  const ListItemTopTitle = () => import("components/content/home/listcon/ListItemTopTitle")
  const ListItemBtm = () => import("components/content/home/listcon/ListItemBtm")
  const ListItemBtmItem = () => import("components/content/home/listcon/ListItemBtmItem")
  export default {
    name: "HomeListItem",
    props: {
      dataList: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    components: {
      ListItemTop,
      SeeMore,
      ListItemTopTitle,
      ListItemBtm,
      ListItemBtmItem
    },
    filters: {
      showPrice(price) {
        return "￥" + price.toFixed(2)
      }
    }
  }
</script>

<style>
	.homelistitem{
		overflow: hidden;
	}
</style>
