<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="Consumables" class="p-0" />
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{name: 'dashboard.index'}">
                        Dashboard
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Consumables
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </MainPageHeader>
</template>

<script>
import MainPageHeader from '../../components/layouts/MenuPageHeader.vue';

export default {
    components: {
        MainPageHeader
    },
    setup() {
        return {
        }
    }
}
</script>