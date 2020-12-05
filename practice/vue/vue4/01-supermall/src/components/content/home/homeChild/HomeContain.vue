<template>
  <div class="homecontain">
    <Contain>
      <con-item v-for="item in datalist" :key='item.id+Math.random(10).toFixed(10)'>
        <div class="img" slot="img">
          <img :src="item.imgsrc" alt="" @load="imgload">
        </div>
        <p class="txt" slot="txt">
          {{item.txt}}
        </p>
        <p class="price" slot="price">
          ￥<span class="p-front">{{item.price | getFront(item.price)}}</span>.<span class="p-backend">{{item.price | getBackend(item.price)}}</span>
        </p>
      </con-item>
    </Contain>
  </div>
</template>

<script>
  const Contain = () => import('components/common/Contain')
  const ConItem = () => import('components/common/conitem/ConItem')

  export default {
    name: "HomeContain",
    components: {
      Contain,
      ConItem
    },
    props: {
      datalist: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods:{
      imgload(){
        // this.$bus.$emit("itemImgload")
      }
    },
    filters: {
      getFront(item) {
        return item.toFixed(2).split(".")[0]
      },
      getBackend(item) {
        return item.toFixed(2).split(".")[1]
      }

    }

  }
</script>

<style>
</style>
