<template>
  <div>
    <h2>query参数传递</h2>
    <div>
      <h4>url解析</h4>
      <pre class="fontsize">
        协议://主机:端口/路径?查询#片段
        scheme://host:port/path?query#fragment
      </pre>
    </div>
    <p><span>$route.query：</span>{{$route.query}}</p>
  </div>
</template>

<script>
  export default {
    name:"ParamPassing",
    created() {
      console.log("ParamPassing created")
    },
    destroyed() {
      console.log("ParamPassing destroyed")
    }
  }
</script>

<style>
</style>
