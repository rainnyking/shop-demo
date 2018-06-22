import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/views/layout/layout'
// import home from '@/views/home/home'
// import classdemo from '@/views/class/class'
// import cart from '@/views/cart/cart'
// import mine from '@/views/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: resolve => require(['@/views/layout/layout'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/views/home/home'], resolve)
        },
        {
          path: '/class',
          name: 'class',
          component: resolve => require(['@/views/class/class'], resolve)
        },
        {
          path: '/cart',
          name: 'cart',
          component: resolve => require(['@/views/cart/cart'], resolve)
        },
        {
          path: '/mine',
          name: 'mine',
          component: resolve => require(['@/views/mine/mine'], resolve)
        }
      ]
    }
  ]
})
