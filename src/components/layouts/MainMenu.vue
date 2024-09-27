<template>
    <a-layout style="min-height: 100vh">
        <LeftSideBar :visible="collapsed" />
        <a-layout>
            <a-layout-header style="background: #fff; padding-left: 14px; font-size: 1rem;">
                <MenuOutlined @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{
                margin: '24px 16px',
                padding: '24px',
                background: '#fff',
                minHeight: '280px',
            }">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import { MenuOutlined } from '@ant-design/icons-vue';
import LeftSideBar from './LeftSideBar.vue';
const selectedKeys = ref(['1']);
const collapsed = ref(false);

</script>

<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>