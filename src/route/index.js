import About from '@/views/About'
import { createWebHashHistory, createRouter } from 'vue-router'
const routes = [{ path: '/about', component: About }]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
