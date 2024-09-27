<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="Accidents" class="p-0" />
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{name: 'dashboard.index'}">
                        Dashboard
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Accidents
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </MainPageHeader>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainPageHeader from '../../components/layouts/MenuPageHeader.vue';
</script>