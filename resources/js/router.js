import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './pages/home.vue'
import Login from './pages/login.vue'
import Register from './pages/register.vue'
import Dashboard from './pages/dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requireAuth : false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requireAuth : false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requireAuth : true
      }
    }
  ]
})

router.beforeEach((to, from) => {
    if (to.meta.requireAuth && !localStorage.getItem('token')) {
      return {name:'login'}
    }
    if (to.meta.requireAuth == false && localStorage.getItem('token')) {
      return {name:'dashboard'}
    }
})
export default router