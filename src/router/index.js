import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from './auth'
import Dashboard from './dashboard'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        ...AuthRoutes,
        ...Dashboard
    ]
})

export default router