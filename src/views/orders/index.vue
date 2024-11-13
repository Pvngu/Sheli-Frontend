<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="Orders" class="p-0" />
        </template>
        <template #breadcrumb>
            <a-breadcrumb separator="-" style="font-size: 12px">
                <a-breadcrumb-item>
                    <router-link :to="{name: 'dashboard.index'}">
                        Dashboard
                    </router-link>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    Orders
                </a-breadcrumb-item>
            </a-breadcrumb>
        </template>
    </MainPageHeader>

    <!-- <menu-page-filters>
        <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
                <a-space>
                    <a-button type="primary" @click="addItem">
                        <PlusOutlined />
                        Add New Order
                    </a-button>
                </a-space>
            </a-col>
        </a-row>
    </menu-page-filters> -->

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
                            <template v-if="column.dataIndex === 'created_at'">
                                {{ formatDateTime(record.created_at) }}
                            </template>
                            <template v-if="column.dataIndex === 'status'">
                                <a-tag v-if="record.status === 'pending'" color="orange">
                                    {{ record.status }}
                                </a-tag>
                                <a-tag v-if="record.status === 'completed'" color="green">
                                    {{ record.status }}
                                </a-tag>
                                <a-tag v-if="record.status === 'canceled'" color="red">
                                    {{ record.status }}
                                </a-tag>
                            </template>
                            <template v-if="column.dataIndex === 'action'">
                                <a-tooltip title="View Items">
                                    <a-button type="primary" @click="viewItems(record.id)">
                                        <template #icon>
                                            <EyeOutlined />
                                        </template>
                                    </a-button>
                                </a-tooltip>
                                <a-button type="primary" style="margin-left: 4px;" @click="deleteItem(record.id)">
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
import MainPageHeader from '../../components/layouts/MenuPageHeader.vue';
import crud from '../../composable/crud';
import common from '../../composable/common.js';
import fields from './fields';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons-vue';

export default {
    components: {
        EyeOutlined,
        DeleteOutlined,
        MainPageHeader
    },
    setup() {
        const crudVariables = crud();
        const { columns } = fields();
        const { formatDateTime } = common();

        return {
            columns,
            formatDateTime,
            dataSources: [
                {
                    id: 3,
                    items: 3,
                    status: 'pending',
                    area_id: 'Area 2',
                    request_by: 'John Doe',
                    attended_by: 'Jane Doe',
                    created_at: '2024-11-12T12:34:56',
                },
                {
                    id: 1,
                    items: 2,
                    status: 'canceled',
                    area_id: 'Area 1',
                    request_by: 'John Doe',
                    attended_by: 'Jane Doe',
                    created_at: '2024-11-11T12:34:56',
                },
                {
                    id: 2,
                    items: 4,
                    status: 'completed',
                    area_id: 'Area 2',
                    request_by: 'John Doe',
                    attended_by: 'Jane Doe',
                    created_at: '2024-11-10T12:34:56',
                },
                {
                    id: 4,
                    items: 6,
                    status: 'completed',
                    area_id: 'Area 1',
                    request_by: 'John Doe',
                    attended_by: 'Jane Doe',
                    created_at: '2024-11-12T12:34:56',
                }
            ]
        }
    }
}
</script>