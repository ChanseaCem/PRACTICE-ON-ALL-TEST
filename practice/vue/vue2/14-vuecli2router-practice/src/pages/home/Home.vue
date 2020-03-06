<template>
  <div>
    <h2>Home</h2>
    <fun-list>
      <div class="h-nav">

        <fun-list-item class="n-con" path="/con1">
          <a href="javascript:" slot="item-list">
            <div class="c-l">
              <img src="@/assets/img/home/homg_btn_saoma.png" alt="">
              <p>Scan</p>
            </div>
          </a>
        </fun-list-item>
        <fun-list-item-dev class="fenge">
          <div slot="item-list-item-dev"></div>
        </fun-list-item-dev>

        <fun-list-item class="n-con" path="/con2">
          <a href="javascript:" slot="item-list">
            <div class="c-l">
              <img src="@/assets/img/home/homg_btn_saoma.png" alt="">
              <p>Pay</p>
            </div>
          </a>
        </fun-list-item>
        <fun-list-item-dev class="fenge">
          <div slot="item-list-item-dev"></div>
        </fun-list-item-dev>

        <fun-list-item class="n-con" path="/con3">
          <a href="javascript:" slot="item-list">
            <div class="c-l">
              <img src="@/assets/img/home/homg_btn_saoma.png" alt="">
              <p>Collect</p>
            </div>
          </a>
        </fun-list-item>
        <fun-list-item-dev class="fenge">
          <div slot="item-list-item-dev"></div>
        </fun-list-item-dev>

        <fun-list-item class="n-con" path="/con4">
          <a href="javascript:" slot="item-list">
            <div class="c-l">
              <img src="@/assets/img/home/homg_btn_saoma.png" alt="">
              <p>Transaction</p>
            </div>
          </a>
        </fun-list-item>

      </div>
    </fun-list>
  </div>
</template>

<script>
  import FunList from "@/components/home/funlist/Funlist"
  import FunListItem from "@/components/home/funlist/FunlistItem"
  import FunListItemDev from "@/components/home/funlist/FunListItemDev"

  export default {
    name: "Home",
    components: {
      FunList,
      FunListItem,
      FunListItemDev
    }
  }
</script>

<style>
</style>
