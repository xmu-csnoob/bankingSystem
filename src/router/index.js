import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
// 引入其他组件...
const routes = [
  {
    path: '/',
    name: '',
    redirect: '/home'
  },
  {
    path: '/forms',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/reg',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/bank',
    name: 'Bank',
    component: () => import('../views/layout/Home.vue'),
    children: [
      {
        path: 'BankInfo',
        component: () => import('../views/BankInfo.vue'),
        name: 'BankInfo'
      },
      {
        path: 'BankTransfer',
        component: () => import('../views/BankTransfer.vue'),
        name: 'BankTransfer'
      }

    ]
  },
  // 定义其他路由...
  {
    path: '/:catchAll(.*)',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
