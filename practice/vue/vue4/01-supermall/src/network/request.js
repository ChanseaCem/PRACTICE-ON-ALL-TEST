import axios from "axios"

function request(config){
  const instance = axios.create({
    baseURL:"http://localhost:3001",
    timeout: 5000
  })
  return instance(config)
}

function request2(config){
  const instance = axios.create({
    baseURL:"http://rap2.taobao.org:38080",
    timeout: 5000
  })
  return instance(config)
}

export {
  request,
  request2
}
