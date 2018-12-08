import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/Home.vue')
const Classify = () => import('../pages/classify/Classify.vue')
const Details = () => import('../pages/details/Details.vue')
const Cart = () => import('../pages/cart/Cart.vue')
const Personal = () => import('../pages/personal/Personal.vue')
import Login from '../pages/login/Login.vue'

//注册路由组件
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/details',
      component: Details,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal

    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    }

  ]
})
