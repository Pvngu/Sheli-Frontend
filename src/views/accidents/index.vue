<template>
    <AddEdit
        :addEditType="addEditType"
        :visible="addEditVisible"
        pageTitle="Add New Accident"
        @closed="onCloseAddEdit"
    />

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

    <menu-page-filters>
        <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
                <a-space>
                    <a-button type="primary" @click="addItem">
                        <PlusOutlined />
                        Add New Accident
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
                                <a-button type="primary">
                                    <template #icon>
                                        <EditOutlined />
                                    </template>
                                </a-button>
                                <a-button 
                                    type="primary"
                                    style="margin-left: 4px"
                                >
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

<script setup>
import { ref, onMounted } from 'vue';
import { DeleteOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons-vue';
import MainPageHeader from '../../components/layouts/MenuPageHeader.vue';
import crud from '../../composable/crud';
import fields from './fields';
import AddEdit from './AddEdit.vue';

const { addItem, addEditType, addEditVisible, onCloseAddEdit } = crud();

const { columns } = fields();

const dataSources = ref([
    {
        key: '1',
        date: '2023-10-01',
        injured_person: 'John Doe',
        reporting_user: 'Jane Smith',
        area: 'Warehouse',
        days_absent: 3,
        description: 'Slipped on wet floor',
        status: 'Reported'
    },
    {
        key: '2',
        date: '2023-10-02',
        injured_person: 'Alice Johnson',
        reporting_user: 'Bob Brown',
        area: 'Office',
        days_absent: 0,
        description: 'Tripped over cable',
        status: 'Resolved'
    },
    {
        key: '3',
        date: '2023-10-03',
        injured_person: 'Michael Green',
        reporting_user: 'Sara White',
        area: 'Parking Lot',
        days_absent: 1,
        description: 'Fell while getting out of car',
        status: 'In Progress'
    },
    {
        key: '4',
        date: '2023-10-04',
        injured_person: 'David Black',
        reporting_user: 'Emily Grey',
        area: 'Cafeteria',
        days_absent: 2,
        description: 'Burned hand on stove',
        status: 'Reported'
    },
    {
        key: '5',
        date: '2023-10-05',
        injured_person: 'Olivia Brown',
        reporting_user: 'James Green',
        area: 'Warehouse',
        days_absent: 0,
        description: 'Hit head on shelf',
        status: 'Resolved'
    },
    {
        key: '6',
        date: '2023-10-06',
        injured_person: 'Sophia White',
        reporting_user: 'Daniel Black',
        area: 'Office',
        days_absent: 1,
        description: 'Slipped on wet floor',
        status: 'In Progress'
    },
    {
        key: '7',
        date: '2023-10-07',
        injured_person: 'Ethan Grey',
        reporting_user: 'Ava Brown',
        area: 'Parking Lot',
        days_absent: 2,
        description: 'Tripped over cable',
        status: 'Reported'
    },
    {
        key: '8',
        date: '2023-10-08',
        injured_person: 'Isabella Green',
        reporting_user: 'Noah White',
        area: 'Cafeteria',
        days_absent: 0,
        description: 'Fell while getting out of car',
        status: 'Resolved'
    },
    {
        key: '9',
        date: '2023-10-09',
        injured_person: 'Mia Black',
        reporting_user: 'Liam Green',
        area: 'Warehouse',
        days_absent: 1,
        description: 'Burned hand on stove',
        status: 'In Progress'
    },
    {
        key: '10',
        date: '2023-10-10',
        injured_person: 'Lucas Brown',
        reporting_user: 'Emma White',
        area: 'Office',
        days_absent: 2,
        description: 'Hit head on shelf',
        status: 'Reported'
    },
    {
        key: '11',
        date: '2023-10-11',
        injured_person: 'Avery White',
        reporting_user: 'Logan Black',
        area: 'Parking Lot',
        days_absent: 0,
        description: 'Slipped on wet floor',
        status: 'Resolved'
    },
    {
        key: '12',
        date: '2023-10-12',
        injured_person: 'Evelyn Grey',
        reporting_user: 'Oliver Green',
        area: 'Cafeteria',
        days_absent: 1,
        description: 'Tripped over cable',
        status: 'In Progress'
    },
    {
        key: '13',
        date: '2023-10-13',
        injured_person: 'Elijah Green',
        reporting_user: 'Aria Brown',
        area: 'Warehouse',
        days_absent: 2,
        description: 'Fell while getting out of car',
        status: 'Reported'
    },
    {
        key: '14',
        date: '2023-10-14',
        injured_person: 'Scarlett Black',
        reporting_user: 'Carter White',
        area: 'Office',
        days_absent: 0,
        description: 'Burned hand on stove',
        status: 'Resolved'
    },
    {
        key: '15',
        date: '2023-10-15',
        injured_person: 'Grayson Brown',
        reporting_user: 'Luna Green',
        area: 'Parking Lot',
        days_absent: 1,
        description: 'Hit head on shelf',
        status: 'In Progress'
    }
]);
</script>