<template>
    <div class="setting-sidebar">
        <a-menu v-model:selectedKeys="selectedKeys">
            <a-menu-item
                key="company"
                @click="$router.push({ name: 'admin.settings.company.index' })"
            >
                <template #icon>
                    <LaptopOutlined />
                </template>
                Company
            </a-menu-item>
            <a-menu-item
                key="users"
                @click="$router.push({ name: 'admin.settings.users.index' })"
            >
                <template #icon>
                    <UserOutlined />
                </template>
                Users
            </a-menu-item>
        </a-menu>
    </div>
</template>

<script>
import { ref } from 'vue'
import { LaptopOutlined, UserOutlined } from '@ant-design/icons-vue'

export default {
    components: {
        LaptopOutlined,
        UserOutlined,
    },
    setup() {
        const selectedKeys = ref(['company'])
        return {
            selectedKeys,
        }
    }
}
</script>

<style scoped>
.setting-sidebar {
    height: calc(100vh - 145px);
}
</style>