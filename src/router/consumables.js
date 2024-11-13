import ConsumableIndex from '../views/consumables/index.vue';
import CategoryIndex from '../views/categories/index.vue';

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/consumables',
                component: ConsumableIndex,
                name: 'consumables.index',
                meta: {
                    title: 'Consumables - Sheli',
                    menuKey: 'consumables',
                }
            },
            {
                path: '/categories',
                component: CategoryIndex,
                name: 'categories.index',
                meta: {
                    title: 'Categories - Sheli',
                    menuKey: 'categories',
                }
            }
        ]
    }
]