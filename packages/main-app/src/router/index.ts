import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
