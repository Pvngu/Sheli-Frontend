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
                <a-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
                    <StateWidget bgColor="#08979c">
                        <template #image>
                            <UserOutlined style="color: #fff; font-size: 24px" />
                        </template>
                        <template #description>
                            <a-statistic :value="1128" title="Total Users" />
                        </template>
                    </StateWidget>
                </a-col>
                <a-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
                    <StateWidget bgColor="#379e0e">
                        <template #image>
                            <UserOutlined style="color: #fff; font-size: 24px" />
                        </template>
                        <template #description>
                            <a-statistic :value="1128" title="Total Accidents" />
                        </template>
                    </StateWidget>
                </a-col>
                <a-col :xs="24" :sm="24" :md="6" :lg="8" :xl="8">
                    <StateWidget bgColor="#d36b08">
                        <template #image>
                            <UserOutlined style="color: #fff; font-size: 24px" />
                        </template>
                        <template #description>
                            <a-statistic :value="1128" title="Current Injured Members" />
                        </template>
                    </StateWidget>
                </a-col>
            </a-row>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import MainPageHeader from '../components/layouts/MenuPageHeader.vue';
import DateRangePicker from '../components/common/calendar/DateRangePicker.vue';
import StateWidget from '../components/common/card/StateWidget.vue';

export default {
    components: {
        UserOutlined,
        MainPageHeader,
        DateRangePicker,
        StateWidget,
    },
    setup() {
        const filters = ref({
            dates: [],
        });

        onMounted(() => {
            console.log('Dashboard page mounted');
        });

        return {
            filters,
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