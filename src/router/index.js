import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from './auth'
import Dashboard from './dashboard'
import accidents from './accidents'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        ...AuthRoutes,
        ...Dashboard,
        ...accidents
    ]
})

export default router