<template>
  <div id="app">
    <h4>axios</h4>
    <p>（数据来源汉宏测试数据库）/(RAP2元能数据)</p>
    <button @click="btnClick()">获取数据</button>
    <button @click="btnClick1()">获取数据1</button>
    <button @click="btnClick2()">获取数据2</button>
    <button @click="btnClick3()">获取数据3</button>
    <button @click="btnClick4()">获取数据4</button>
    <button @click="btnClick5()">获取数据5</button>
    <button @click="btnClick6()">获取数据6</button>
    <button @click="btnClick7()">获取数据7</button>
    <button @click="btnClick8()">获取数据8</button>
    <button @click="btnClick9()">获取数据9</button>
    <button @click="btnClick10()">获取数据10</button>
    <button @click="btnClick11()">获取数据11</button>
    <button @click="btnClick12()">获取数据12</button>
  </div>
</template>

<script>
  const url = "http://localhost:3001/v1/cnc/quality/technics_info"
  const url2 = "http://localhost:3001/v1/cnc/quality/technics_ref"
  // const url_login = "http://rap2.taobao.org:38080/app/mock/116694/wareslist.html0?username=123&password=123"
  const url_login = "http://rap2.taobao.org:38080/app/mock/116694/wareslist.html0"
  import axios from "axios";
  import {
    request,
    request2,
    request3,
    request4,
    request_interceptors
  } from "./network/request"
  export default {
    name: 'App',
    methods: {
      btnClick() {
        // post请求
        axios({
          url: url,
          method: "post"
        }).then(res => {
          console.log(res)
        })
      },
      btnClick1() {
        // post请求，带参数，post使用的是data，get使用的是params
        axios({
          url: url_login,
          method: "post",
          data: {
            username: "123",
            password: "123"
          }
        }).then(res => {
          console.log(res)
        })
      },
      btnClick2() {
        axios.get(url_login)
          .then(res => {
            console.log(res)
          }).catch(err => {
            console.log(err)
          })
        // axios.post(url)
        // .then(res => {
        //   console.log(res)
        // }).catch(err => {
        //   console.log(err)
        // })
      },
      btnClick3() {
        // get请求，params是url后面拼接的数据
        axios({
          url: url_login,
          method: "get",
          params: {
            username: "123",
            password: "123"
          }
        }).then(res => {
          console.log(res)
        })
      },
      btnClick4() {

        // Promise的写法
        Promise.all([
          new Promise((resolve, reject) => {
            axios({
              url: url
            }).then(res => {
              resolve(res)
            })
          }),
          new Promise((resolve, reject) => {
            axios({
              url: url_login,
              method: "post",
              data: {
                username: "1223",
                password: "123"
              }
            }).then(res => {
              resolve(res)
            })
          })
        ]).then(res => {
          console.log(res)
        })
      },
      btnClick5() {

        // axios的封装写法
        axios.all([
          axios({
            url: url
          }),
          axios({
            url: url_login,
            method: "post",
            data: {
              username: "213",
              password: "1234"
            }
          })
        ]).then(res => {
          console.log(res)
        })
      },
      // 测试-axios的配置
      btnClick6() {

        axios.defaults.baseURL = "http://localhost:3001/v1/cnc/quality"
        axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"
        // axios的封装写法
        axios.all([
          axios({
            // baseURL:"http://localhost:3001/v1/cnc/quality",
            url: "/technics_info",
            timeout: 5000
          }),
          axios({
            // baseURL:"http://localhost:3001/v1/cnc/quality",
            url: "/technics_ref",
            timeout: 5000
          })
        ]).then(res => {
          console.log(res)
        })
      },
      // 如果服务器不止一个
      btnClick7() {
        // 1.一般情况下都这么做,创建axios的实例
        const instance1 = axios.create({
          baseURL: "http://localhost:3001/v1/cnc/quality"
        })

        instance1({
          url: "/technics_info",
        }).then(res => {
          console.log(res)
        })

        instance1({
          url: '/technics_ref',
          method: "post",
          data: {
            username: "123",
            password: "123"
          }
        }).then(res => {
          console.log(res)
        })


        const instance2 = axios.create({
          baseURL: "http://localhost:3001/v1/cnc/quality"
        })
      },
      // network封装请求使用一
      btnClick8() {
        request({
            url: "/v1/cnc/quality/technics_ref"
          },
          (res) => {
            console.log(res)
          },
          (err) => {
            console.log(err)
          })
      },
      // network封装请求使用二
      btnClick9() {
        request2({
          "baseConfig": {
            "url": "/v1/cnc/quality/technics_ref"
          },
          "success": function(res) {
            console.log(res)
          },
          "failure": function(err) {
            console.log(err)
          }
        })
      },
      // network封装请求使用三
      btnClick10() {
        request3({
          "baseConfig": {
            "url": "/v1/cnc/quality/technics_ref"
          }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      // network封装请求使用四
      btnClick11() {
        request4({
          "url": "/v1/cnc/quality/technics_ref"
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      },
      // 拦截器的使用
      btnClick12() {
        request_interceptors({
          "url": "/v1/cnc/quality/technics_ref"
        }, (res) => {
          console.log(res)
        }, (err) => {
          console.log(err)
        })
      }

    }
  }
</script>

<style>
</style>
