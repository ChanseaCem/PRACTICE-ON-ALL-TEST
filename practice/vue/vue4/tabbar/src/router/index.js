import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "",
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode: "history"
})
