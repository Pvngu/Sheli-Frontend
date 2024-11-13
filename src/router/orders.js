import OrderIndex from '../views/orders/index.vue'

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/orders',
                component: OrderIndex,
                name: 'orders.index',
                meta: {
                    title: 'Orders - Sheli',
                    menuKey: 'orders',
                }
            },
        ]
    },
]