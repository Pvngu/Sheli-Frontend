<template>
    <a-layout-sider v-model:collapsed="props.visible" :width="240" :trigger="null" collapsible>
        <div class="sidebar-logo" :class="{ collapsed: visible }">
            <img width="30px" :src="logoUrl" alt="Sheli logo" />
            <span v-if="!props.visible">Sheli</span>
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item 
                @click="() => $router.push({ name: 'dashboard.index' })"
                key="dashboard"
            >
                <DashboardOutlined />
                <span>Dashboard</span>
            </a-menu-item>
            <a-menu-item
                @click="() => $router.push({ name: 'accidents.index' })"
                key="accidents"
            >
                <AlertOutlined />
                <span>Accidents</span>
            </a-menu-item>
            <!-- <a-menu-item key="reports">
                <FileTextOutlined />
                <span>Reports</span>
            </a-menu-item> -->
            <a-menu-item 
                @click="() => $router.push({ name: 'areas.index' })"
                key="areas"
            >
                <EnvironmentOutlined />
                <span>Areas</span>
            </a-menu-item>
            <a-sub-menu key="users" title="User Management">
                <template #icon>
                    <UserOutlined />
                </template>
                <a-menu-item 
                    @click="() => $router.push({ name: 'users.index' })"
                    key="users"
                >
                    <span>Users</span>
                </a-menu-item>
                <a-menu-item 
                    @click="() => $router.push({ name: 'roles.index' })"
                    key="roles"
                >
                    <span>Roles</span>
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item
                @click="() => $router.push({ name: 'chat.index' })"
                key="chat"
            >
                <CommentOutlined />
                <span>Chat</span>
            </a-menu-item>
            <a-menu-item key="settings">
                <SettingOutlined />
                <span>Settings</span>
            </a-menu-item>
            <a-menu-item
                @click="() => $router.push({ name: 'login' })"
            >
                <LogoutOutlined />
                <span>Logout</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import logoUrl from '../../assets/images/Sheli_logo.png';
import {
    DashboardOutlined,
    AlertOutlined,
    FileTextOutlined,
    EnvironmentOutlined,
    ShoppingCartOutlined,
    ToolOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    CommentOutlined,
    AppstoreOutlined,
    InboxOutlined,
    TagsOutlined,
} from '@ant-design/icons-vue';

const props = defineProps({
    visible: Boolean
});
const route = useRoute();

const selectedKeys = ref([]);

onMounted(() => {
    var menuKey =
        typeof route.meta.menuKey == "function"
            ?route.meta.menuKey(route)
            : route.meta.menuKey;
            
    selectedKeys.value = [menuKey.replace("-", "_")];
});
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