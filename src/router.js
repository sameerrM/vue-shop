import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Admin from './admin/Admin'
import Overview from './admin/Overview'
import Products from './admin/Products'
import Orders from './admin/Orders'
import Profile from './admin/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: Overview
        },
        {
          path: 'products',
          name: 'products',
          component: Products
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
