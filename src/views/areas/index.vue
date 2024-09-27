<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="Areas" class="p-0" />
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{name: 'dashboard.index'}">
                        Dashboard
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Areas
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </MainPageHeader>

    <menu-page-filters>
        <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
                <a-space>
                    <a-button type="primary">
                        <PlusOutlined />
                        Add New Area
                    </a-button>
                </a-space>
            </a-col>
        </a-row>
    </menu-page-filters>

    <menu-page-table-content>
        <a-row>
            <a-col :span="24">
                <div class="table-responsive">
                    <a-table
                        :columns="columns"
                        bordered
                        size="middle"
                    >
                        
                    </a-table>
                </div>
            </a-col>
        </a-row>
    </menu-page-table-content>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import MainPageHeader from '../../components/layouts/MenuPageHeader.vue';
import fields from './fields';

const { columns } = fields();
</script>