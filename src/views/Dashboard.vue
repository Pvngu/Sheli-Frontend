<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="Dashboard" class="p-0" />
        </template>
    </MainPageHeader>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainPageHeader from '../components/layouts/MenuPageHeader.vue';
</script>

<style>
.dashboard-page-content-container {
    padding: 0px;
    margin: 0px 16px 0;
}
</style>