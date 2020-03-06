<template>
  <div>
    <h2>懒加载的方式</h2>
    <div>
      <h3>方式一：结合Vue的异步组件和webpack的代码分析</h3>
      <pre>
        (此代码写在router文件夹下的js)
        const lazyToLoad = resolve => {
          require.ensure(['../components/LazyToLoad.vue'], () => {
            resolve(require('../components/LazyToLoad'))
          })
        }
      </pre>
      <h3>方式二：AMD写法</h3>
      <pre>
        (此代码写在router文件夹下的js)
        const lazyToLoad = resolve => {
          require(['../components/LazyToLoad.vue'],resolve)
        }
      </pre>
      <h3>方式二：es6写法</h3>
      <pre>
        (此代码写在router文件夹下的js)
        const lazyToLoad = () => import('../components/LazyToLoad.vue')
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
    name:"LazyToLoad",
    created() {
      console.log("LazyToLoad created")
    },
    destroyed() {
      console.log("LazyToLoad destroyed")
    }
  }
</script>

<style>
</style>
