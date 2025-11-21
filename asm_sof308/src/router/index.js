import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "/blog",
        component: Blog
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;