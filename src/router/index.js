import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
// 引入其他组件...

const routes = [
    {
        path: '/forms',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView
    }
    // 定义其他路由...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
