import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from './auth'
import Dashboard from './dashboard'
import accidents from './accidents'
import areas from './areas'
import chat from './chat'
import orders from './orders'
import userManagement from './userManagement'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        ...AuthRoutes,
        ...Dashboard,
        ...accidents,
        ...areas,
        ...userManagement,
        ...chat,
        ...orders
    ]
})

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Default Title'
  })

export default router