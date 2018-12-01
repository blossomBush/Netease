import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Details from '../pages/details/Details.vue'
import Cart from '../pages/cart/Cart.vue'
import Personal from '../pages/personal/Personal.vue'

//注册路由组件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/details',
      component: Details
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/personal',
      component: Personal
    },

  ]
})
