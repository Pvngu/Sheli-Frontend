import Chat from '../views/chat/index.vue';

export default [
    {
        path: '/',
        component: () => import('../components/layouts/MainMenu.vue'),
        children: [
            {
                path: '/chat',
                component: Chat,
                name: 'chat.index',
                meta: {
                    title: 'Chat - Sheli',
                    menuKey: 'chat',
                }
            },
        ]
    }
]