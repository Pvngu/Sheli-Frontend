import Dashboard from '../views/Dashboard.vue';

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/dashboard',
                component: Dashboard,
                name: 'dashboard.index',
                meta: {
                    title: 'Dashboard - Sheli',
                    menuKey: 'dashboard',
                }
            }
        ]
    },
]