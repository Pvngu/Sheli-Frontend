import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from './auth'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        ...AuthRoutes
    ]
})

export default router