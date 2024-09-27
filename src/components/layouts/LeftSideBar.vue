<template>
    <a-layout-sider 
        v-model:collapsed="props.visible" 
        :width="240" 
        :trigger="null" 
        collapsible
    >
        <div class="sidebar-logo" :class="{ collapsed: visible}">
            <img width="30px" src="../../assets/Sheli_logo.png" alt="Sheli logo" />
            <span v-if="!props.visible">Sheli</span>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
                <DashboardOutlined />
                <span>Dashboard</span>
            </a-menu-item>
        <a-menu-item key="2">
            <AlertOutlined />
            <span>Accidents</span>
        </a-menu-item>
        <a-menu-item key="3">
            <FileTextOutlined />
            <span>Reports</span>
        </a-menu-item>
        <a-menu-item key="4">
            <EnvironmentOutlined />
            <span>Areas</span>
        </a-menu-item>
        <a-menu-item key="5">
            <ShoppingCartOutlined />
            <span>Orders</span>
        </a-menu-item>
        <a-menu-item key="6">
            <ToolOutlined />
            <span>Consumables</span>
        </a-menu-item>
        <a-sub-menu key="7" title="User Management">
            <template #icon>
                <UserOutlined />
            </template>
            <a-menu-item key="7-1">
                <span>Users</span>
            </a-menu-item>
            <a-menu-item key="7-2">
                <span>Roles</span>
            </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="8">
            <SettingOutlined />
            <span>Settings</span>
        </a-menu-item>
        <a-menu-item key="9">
            <LogoutOutlined />
            <span>Logout</span>
        </a-menu-item>
    </a-menu>
</a-layout-sider>
</template>

<script setup>
import { ref } from 'vue';
import { 
    DashboardOutlined,
    AlertOutlined, 
    FileTextOutlined, 
    EnvironmentOutlined, 
    ShoppingCartOutlined, 
    ToolOutlined, 
    UserOutlined, 
    SettingOutlined, 
    LogoutOutlined 
} from '@ant-design/icons-vue';

const props = defineProps({
    visible: Boolean
});

const selectedKeys = ref(['1']);
</script>

<style>
.sidebar-logo {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;
    font-size: 1.4rem;
    height: 32px;
    margin: 16px;
}

.collapsed {
    justify-content: center;
}
</style>