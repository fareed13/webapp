import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signup',
    name: 'SignUp',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/Login',
    name: 'LogIn',
    component: () => import('../components/LogIn.vue')
  },
  {
    path: '/Updateresturant/:id',
    name: 'Updaterest',
    component: () => import('../views/Updaterest.vue')
  },
  {
    path: '/Addresturant',
    name: 'Addrest',
    component: () => import('../views/Addrest.vue')
  },
  {
    path: '/Formresturant/:id',
    name: 'Formresturant',
    component: () => import('../views/Formresturant.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Header.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
