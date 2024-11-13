import CompanyEdit from '../views/settings/company/Edit.vue'
import ProfileEdit from '../views/settings/profile/Edit.vue'

export default [
    {
        path: '/settings',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/settings/company',
                component: CompanyEdit,
                name: 'settings.company.edit',
                meta: {
                    title: 'Company - Sheli',
                    menuKey: 'settings',
                }
            },
            {
                path: '/settings/profile',
                component: ProfileEdit,
                name: 'settings.profile.edit',
                meta: {
                    title: 'Profile - Sheli',
                    menuKey: 'settings',
                }
            }
        ]
    },
]