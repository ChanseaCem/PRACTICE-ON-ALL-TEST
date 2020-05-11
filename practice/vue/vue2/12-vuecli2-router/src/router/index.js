import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home"
import About from "@/components/About"
import User from "@/components/User"
// import Home from "../components/Home"
// import About from "../components/About"
const HomeNews = () => import('@/components/homeChildren/HomeNews')
const HomeMsg = () => import('@/components/homeChildren/HomeMsg')
const ParamPassing = () => import('@/components/ParamPassing')
const ProFile = () => import('@/components/ProFile')

// 1.通过Vue.use安装插件,它会在底层去执行install
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"",
      redirect:"/home"
    },
    {
      path: '/home',
      component: Home,
      meta:{
        title:"首页"
      },
      children:[
        {
          path:"",
          redirect:"news"
        },
        {
          path:"news",
          component:HomeNews
        },
        {
          path:"msg",
          component:HomeMsg
        }
      ]
    },
    {
      path:"/about/",
      component:About,
      meta:{
        title:"关于"
      },
    },
    {
      path:"/about2/:id",
      component:About,
      meta:{
        title:"关于2"
      },
    },
    {
      path:"/user/:userid",
      component:User,
      meta:{
        title:"用户"
      },
    },
    {
      path:"/lazy",
      component:() => import ("@/components/LazyToLoad"),//路由懒加载,
      meta:{
        title:"懒加载"
      },
    },
    {
      path:"/param",
      component:ParamPassing,
      meta:{
        title:"参数传递"
      },
    },
    {
      path:"/proFile",
      component:ProFile,
      meta:{
        title:"档案"
      },
    }
  ],
  mode:"history",
  linkActiveClass:"active"//激活按钮class值修改 默认router-link-active
})

// 前置守卫(guard)
router.beforeEach((to,from,next) => {
  // console.log(to)
  document.title = to.matched[0].meta.title
  next()//一定要写next,不然会中断导航
})

// 后置钩子hook
router.afterEach((to,from,next) => {

})

// 2.创建路由对象并导出-->这个创建的就是$Router
export default router
