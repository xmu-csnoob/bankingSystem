import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import TransactionView from "../views/TransactionView.vue";
// 引入其他组件...

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/reg',
        name: 'Register',
        component: RegisterView
    },
    {
        path: '/transact',
        name: 'Transact',
        component: TransactionView
    },
    // 定义其他路由...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
