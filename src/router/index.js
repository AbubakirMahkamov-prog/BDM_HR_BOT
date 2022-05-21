import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newemployee',
    name: 'newemployee',
    component: () => import('../views/NewEmployee.vue')
  },
  {
    path: '/applications',
    name: 'Application',
    component: () => import('../views/ApplicationView.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/MapView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
