import AccidentIndex from '../views/accidents/index.vue'

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/accidents',
                component: AccidentIndex,
                name: 'accidents.index',
                meta: {
                    menuKey: 'accidents',
                }
            }
        ]
    },
]