import Vue from "vue"
import Router from "vue-router"

// import Home from "@/components/content/Home.vue"
// import Msg from "@/components/content/Msg"
// import Category from "@/components/content/Category"
// import Shop from "@/components/content/Shop"
// import My from "@/components/content/My"

const Home = () => import('@/components/content/home/Home')
const Msg = () => import("@/components/content/msg/Msg")
const Category = () => import("@/components/content/category/Category")
const Shop = () => import("@/components/content/shop/Shop")
const My = () => import("@/components/content/my/My")

Vue.use(Router)

const routes = [{
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/msg",
    component: Msg
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/my",
    component: My
  }
]

const router = new Router({
  routes,
  mode: "history"
})

export default router
