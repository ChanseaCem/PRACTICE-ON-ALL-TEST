<template>
  <div id="category">
    <category-nav-bar></category-nav-bar>
  </div>
</template>

<script>
  const CategoryNavBar = () => import('components/content/category/categoryChild/CategoryNavBar')
  export default {
    name:"Category",
		components:{
      CategoryNavBar
		}
  }
</script>

<style>
</style>
