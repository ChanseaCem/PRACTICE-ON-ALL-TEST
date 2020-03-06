import axios from "axios"

function request(config, success, failure) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 5000
  })

  // 3.发送请求
  instance(config)
    .then(res => {
      success(res)
    }).catch(err => {
      failure(err)
    })
}

function request2(config) {
  const instance = axios.create({
    baseURL: "http://localhost:3001"
  })
  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}

function request3(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "http://localhost:3001"
    })
    instance(config.baseConfig)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// 最终写法,也是最好的写法
function request4(config) {
  const instance = axios.create({
    baseURL: "http://localhost:3001"
  })
  return instance(config) //instance本身就是返回一个promise,所以request3方法可以不必要
}

function request_interceptors(config, success, failure) {
  // 1.创建实例
  const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 5000
  })

  //2.拦截器-请求拦截
  instance.interceptors.request.use((config) => {
    console.log(config)
    // 1.比如config中的一些不符合服务器的信息
    // 2.比如每次发送网络请求时候,都希望在界面显示一个正在加载的图标
    // 3.某些网络请求(比如登录token),必须携带一些特殊的信息
    // 以上都可以在这里修改
    return config //一定要返回,不然请求会被拦截下来,无法继续
  }, err => {
    console.log(err)
  })

  //2.拦截器-响应
  instance.interceptors.response.use((res) => {
    console.log(res)
    return res //一定要返回,不然请求会被拦截下来,无法继续
  }, err => {
    console.log(err)
  })

  // 3.发送请求
  instance(config)
    .then(res => {
      success(res)
    }).catch(err => {
      failure(err)
    })
}

export {
  request,
  request2,
  request3,
  request4,
  request_interceptors
}
