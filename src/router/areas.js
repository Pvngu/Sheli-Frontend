import AreaIndex from '../views/areas/index.vue'

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/areas',
                component: AreaIndex,
                name: 'areas.index',
                meta: {
                    menuKey: 'areas',
                }
            }
        ]
    },
]