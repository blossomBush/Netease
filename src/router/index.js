import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/Home.vue')
const Classify = () => import('../pages/classify/Classify.vue')
const Details = () => import('../pages/details/Details.vue')
const Cart = () => import('../pages/cart/Cart.vue')
const Personal = () => import('../pages/personal/Personal.vue')


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
