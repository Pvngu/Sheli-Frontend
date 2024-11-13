<template>
    <BarChart :chartData="chartData" :options="options" />
</template>

<script>
import { ref, watch } from 'vue';
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    props: ["data"],
    components: {
        BarChart
    },
    setup(props) {
        const chartData = ref({
            labels: props.data.months,
            datasets: [
                {
                data: props.data.accidentsByMonth,
                backgroundColor: '#289dce',
                },
            ],
        });

        const options = ref({
            plugins: {
                legend: {
                    display: false,
                },
            },
        });

        watch(() => props.data, (newData) => {
            chartData.value.labels = newData.months;
            chartData.value.datasets[0].data = newData.accidentsByMonth;
        });

        return {
            chartData,
            options
        }
    }
}
</script>