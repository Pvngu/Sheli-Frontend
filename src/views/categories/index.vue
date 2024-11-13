<template>
    <AddEdit 
        :addEditType="addEditType" 
        :visible="addEditVisible" 
        :pageTitle="pageTitle" 
        :formData="formData"
        :data="viewData"
        @closed="onCloseAddEdit"
    />

    <MainPageHeader>
        <template #header>
            <a-page-header title="Categories" class="p-0" />
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{name: 'dashboard.index'}">
                        Dashboard
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Categories
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </MainPageHeader>

    <menu-page-filters>
        <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
                <a-space>
                    <a-button type="primary" @click="addItem">
                        <PlusOutlined />
                        Add New Category
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
                        :dataSource="dataSources"
                    >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.dataIndex === 'action'">
                                <a-button type="primary" @click="editItem(record)">
                                    <template #icon>
                                        <EditOutlined />
                                    </template>
                                </a-button>
                                <a-button type="primary" style="margin-left: 4px">
                                    <template #icon>
                                        <DeleteOutlined />
                                    </template>
                                </a-button>
                            </template>
                        </template>
                    </a-table>
                </div>
            </a-col>
        </a-row>
    </menu-page-table-content>
</template>

<script>
import { ref, onMounted } from 'vue';
import { DeleteOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons-vue';
import MainPageHeader from '../../components/layouts/MenuPageHeader.vue';
import crud from '../../composable/crud';
import fields from './fields';
import AddEdit from './AddEdit.vue';

export default {
    components: {
        DeleteOutlined,
        PlusOutlined,
        EditOutlined,
        MainPageHeader,
        AddEdit,
    },
    setup() {
        const crudVariables = crud();
        const { columns, initData } = fields();

        onMounted(() => {
            // Initialize edit form data
            crudVariables.initData.value = { ...initData };
            crudVariables.formData.value = { ...initData };
        });

        return {
            dataSources: [
                {
                    id: 1,
                    name: 'Category 1',
                    description: 'Description 1',
                    status: 'Active',
                },
                {
                    id: 2,
                    name: 'Category 2',
                    description: 'Description 2',
                    status: 'Inactive',
                },
                {
                    id: 3,
                    name: 'Category 3',
                    description: 'Description 3',
                    status: 'Active',
                },
            ],

            columns,
            ...crudVariables,
        }
    }
}
</script>