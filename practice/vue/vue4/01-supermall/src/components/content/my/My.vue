<template>
  <div id="my">
    <my-head></my-head>
    <my-orders :orderNums="orderNums"></my-orders>
    <my-discounts></my-discounts>
    <my-funs></my-funs>
  </div>
</template>

<script>
  const MyOrders = () => import("@/components/content/my/myChild/MyOrders")
  const MyFuns = () => import("@/components/content/my/myChild/MyFuns")
  const MyDiscounts = () => import("@/components/content/my/myChild/MyDiscounts")
  const MyHead = () => import("@/components/content/my/myChild/MyHead")
  
  export default {
    name: "My",
    data() {
      return {
        orderNums: {
          numToPay: 0,
          numToSend: 0,
          numToRev: 0,
          numToComment: 0
        }
      }
    },
    components: {
      MyOrders,
      MyFuns,
      MyDiscounts,
      MyHead
    }
  }
</script>

<style>
  #my {
    padding-top: 170px;
    padding-bottom: 49px;
  }
</style>
