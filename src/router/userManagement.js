import UserIndex from '../views/user-management/users/index.vue'
import RoleIndex from '../views/user-management/roles/index.vue'

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/users',
                component: UserIndex,
                name: 'users.index',
                meta: {
                    title: 'Users - Sheli',
                    menuKey: 'users',
                }
            },
            {
                path: '/roles',
                component: RoleIndex,
                name: 'roles.index',
                meta: {
                    title: 'Roles - Sheli',
                    menuKey: 'roles',
                }
            }
        ]
    },
]