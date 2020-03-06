import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/Home')
const Cat = () => import('@/views/cat/Cat')
const Cate = () => import('@/views/cate/Cate')
const Category = () => import('@/views/category/Category')
const Camara = () => import('@/views/camara/Camara')
const ProFile = () => import('@/views/profile/ProFile')
const Mine = () => import('@/views/mine/Mine')

// 1.安装插件
Vue.use(Router)

// 2.创建路由对象
const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },,
  {
    path:"/mine",
    component:Mine
  },
  {
    path:"/cat",
    component:Cat
  },
  {
    path:"/cate",
    component:Cate
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/camara",
    component:Camara
  },
  {
    path:"/profile",
    component:ProFile
  },
]

const router = new Router({
  routes,
  mode:"history"
})

// 3.导出router
export default router
