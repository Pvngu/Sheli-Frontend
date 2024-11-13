import OrderIndex from '../views/orders/index.vue'
import ConsumableIndex from '../views/consumables/index.vue'

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
            {
                path: '/consumables',
                component: ConsumableIndex,
                name: 'consumables.index',
                meta: {
                    title: 'Consumables - Sheli',
                    menuKey: 'consumables',
                }
            }
        ]
    },
]