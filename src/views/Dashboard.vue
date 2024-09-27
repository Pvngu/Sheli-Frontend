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