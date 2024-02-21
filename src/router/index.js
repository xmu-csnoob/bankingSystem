import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue";
// 引入其他组件...

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    // 定义其他路由...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
