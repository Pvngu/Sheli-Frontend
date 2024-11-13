<template>
    <a-table
        :columns="columns"
        :row-key="(record) => record.id"
        :dataSource="data"
        :pagination="false"
    >
        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex == 'date'">
                {{ formatDateTime(record.date) }}
            </template>
        </template>
    </a-table>
</template>

<script>
import { ref } from 'vue';
import common from '../../composable/common.js';

export default {
    setup() {
        const { formatDateTime } = common();
        const columns = ref([
            {
                title: 'Time of Accident',
                dataIndex: 'date',
            },
            {
                title: 'Injured Person',
                dataIndex: 'injured_person',
            },
            {
                title: 'Reporting User',
                dataIndex: 'reporting_user',
            },
            {
                title: 'Area',
                dataIndex: 'area',
            },
            {
                title: 'Status',
                dataIndex: 'status',
            }
        ]);

        return {
            columns,
            formatDateTime,
            data: [
                {
                    id: 1,
                    date: '2021-09-01 12:00:00',
                    injured_person: 'John Doe',
                    reporting_user: 'Jane',
                    area: 'Area 1',
                    status: 'Pending'
                },
                {
                    id: 2,
                    date: '2021-09-01 12:00:00',
                    injured_person: 'John Doe',
                    reporting_user: 'Jane',
                    area: 'Area 1',
                    status: 'Pending'
                },
                {
                    id: 3,
                    date: '2021-09-01 12:00:00',
                    injured_person: 'John Doe',
                    reporting_user: 'Jane',
                    area: 'Area 1',
                    status: 'Pending'
                },
                {
                    id: 4,
                    date: '2021-09-01 12:00:00',
                    injured_person: 'John Doe',
                    reporting_user: 'Jane',
                    area: 'Area 1',
                    status: 'Pending'
                },
                {
                    id: 5,
                    date: '2021-09-01 12:00:00',
                    injured_person: 'John Doe',
                    reporting_user: 'Jane',
                    area: 'Area 1',
                    status: 'Pending'
                }
            ]
        }
    }
}
</script>