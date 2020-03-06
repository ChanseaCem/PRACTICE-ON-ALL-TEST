import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/Home'
import Caifu from '@/pages/caifu/Caifu'
import My from '@/pages/my/My'
import Pengyou from '@/pages/pengyou/Pengyou'
import HelloWorld from "@/components/HelloWorld"
import Con1 from "@/components/home/funlists/con1"
import Con2 from "@/components/home/funlists/con2"
import Con3 from "@/components/home/funlists/con3"
import Con4 from "@/components/home/funlists/con4"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: "首页"
      },
      children: [{
        path: "",
        component: HelloWorld
      }, {
        path: 'helloworld',
        name: 'HelloWorld',
        component: HelloWorld
      }, {
        path: 'con1',
        name: 'Con1',
        component: Con1
      }, {
        path: 'con2',
        name: 'Con2',
        component: Con2
      }, {
        path: 'con3',
        name: 'Con3',
        component: Con3
      }, {
        path: 'con4',
        name: 'Con4',
        component: Con4
      }]
    },
    {
      path: '/caifu',
      name: 'Caifu',
      component: Caifu
    },
    {
      path: '/pengyou',
      name: 'Pengyou',
      component: Pengyou
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
  mode: "history"
})
