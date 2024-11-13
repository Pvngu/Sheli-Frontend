<template>
    <MainPageHeader>
        <template #header>
            <a-page-header title="Dashboard" class="p-0" />
        </template>
    </MainPageHeader>

    <div class="dashboard-page-content-container">
        <a-row :gutter="[8, 8]" class="mt-30 mb-10">
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <DateRangePicker
                    @dateTimeChanged="
                        (changedDateTime) => (filters.dates = changedDateTime)
                    "
                />
            </a-col>
        </a-row>
        <div class="mt-30 mb-10">
            <a-row :gutter="[16, 16]">
                <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <StateWidget bgColor="#08979c">
                        <template #image>
                            <UserOutlined style="color: #fff; font-size: 24px" />
                        </template>
                        <template #description>
                            <a-statistic :value="4" title="Total Users" />
                        </template>
                    </StateWidget>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <StateWidget bgColor="#379e0e">
                        <template #image>
                            <UserOutlined style="color: #fff; font-size: 24px" />
                        </template>
                        <template #description>
                            <a-statistic :value="130" title="Total Accidents" />
                        </template>
                    </StateWidget>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <StateWidget bgColor="#d36b08">
                        <template #image>
                            <UserOutlined style="color: #fff; font-size: 24px" />
                        </template>
                        <template #description>
                            <a-statistic :value="2" title="Current Injured Members" />
                        </template>
                    </StateWidget>
                </a-col>
            </a-row>
        </div>
        <a-row :gutter="[18, 18]" class="mt-30 mb-20">
            <a-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <a-card title="Accidents By Area">
                    <AccidentArea :data="data" />
                </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="18" :xl="18">
                <a-card title="Accidents By Month">
                    <AccidentMonth :data="data" />
                </a-card>
            </a-col>
        </a-row>
        <a-row :gutter="[18, 18]" class="mt-30 mb-20">
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a-card title="Recent Accidents" :bodyStyle="{ padding: '0px' }" >
                    <RecentAccidents />
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import MainPageHeader from '../components/layouts/MenuPageHeader.vue';
import DateRangePicker from '../components/common/calendar/DateRangePicker.vue';
import StateWidget from '../components/common/card/StateWidget.vue';
import AccidentArea from '../components/charts/dashboard/AccidentArea.vue';
import AccidentMonth from '../components/charts/dashboard/AccidentMonth.vue';
import RecentAccidents from './dashboard/RecentAccidents.vue';

export default {
    components: {
        UserOutlined,
        MainPageHeader,
        DateRangePicker,
        StateWidget,
        AccidentArea,
        AccidentMonth,
        RecentAccidents,
    },
    setup() {
        const filters = ref({
            dates: [],
        });

        const data = ref({
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            accidentsByMonth: [30, 20, 60, 40, 50, 30, 20, 60, 40, 50, 30, 20],
            areas: ['Area 1', 'Area 2', 'Area 3'],
            accidentsByArea: [30, 40, 60],
        });

        onMounted(() => {
            console.log('Dashboard page mounted');
        });

        return {
            filters,
            data,
        }
    }
}
</script>

<style>
.dashboard-page-content-container {
    padding: 0px;
    margin: 0px 16px 0;
}
</style>