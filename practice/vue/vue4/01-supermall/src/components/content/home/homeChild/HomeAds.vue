<template>
  <div class="homeads">
    <div class="ad-top clear-fix">
      <div class="t-left float-left">
        <img src="~assets/img/home/home_t_zixun.png" alt="">
      </div>
      <ul class="t-center">
        <li class="clear-fix" v-for="item in datalist" :key="item.id">
          <span class="c-red">{{item.tip}}</span>
          <span class="c-text">{{item.txt}}</span>
        </li>
      </ul>
      <div class="t-right float-right">
        <img src="~assets/img/home/home_img_zixun.png" alt="">
      </div>
    </div>
    <div class="ad-bottom">
      <img src="~assets/img/home/banner2.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "HemeAds",
		props:{
			datalist:{
				type:Array,
				default(){
					return [{
            id:"asdfsdf",
            tip:"HOT",
            txt:"来一把农药开黑？手游普及化超乎预期"
					},{
            id:"fdfsds",
            tip:"热门",
            txt:"穿衣这样绝对不会出错，尤其第二种"
					}]
				}
			}
		}
  }
</script>

<style>
  .homeads {
    border-bottom: 8px solid #EEEEEE;
    padding-bottom: 10px;
  }

  .homeads .ad-top {
    display: flex;
    padding: 10px;
  }

  .homeads .ad-top .t-left {
    width: 40px;
    height: 40px;
    position: relative;
    margin-top: 10px;
  }

  .homeads .ad-top .t-left img,
  .homeads .ad-top .t-right img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }

  .homeads .ad-top .t-right {
    width: 50px;
    height: 55px;
    position: relative;
  }

  .homeads .ad-bottom {
    width: 94%;
    margin: auto;
  }

  .homeads .ad-bottom img {
    width: 100%;
  }

  .homeads .ad-top .t-center {
    flex: 1;
    padding-top: 5px;
    overflow: scroll;
    max-height: 50px;
  }

  .homeads .ad-top .t-center::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .homeads .ad-top .t-center li {
    display: flex;
    white-space: nowrap;
    padding: 4px 0;
  }

  .homeads .ad-top .t-center .c-red {
    display: block;
    border: 1px solid red;
    float: left;
    color: red;
    border-radius: 5px;
    padding: 0 4px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 5px;
  }

  .homeads .ad-top .t-center .c-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #333333;
    flex: 1;
  }
</style>
