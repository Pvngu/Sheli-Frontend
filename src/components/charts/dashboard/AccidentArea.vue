<template>
    <DoughnutChart :chartData="chartData" :options="options" />
</template>

<script>
import { ref, watch } from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
    props: ["data"],
    components: {
        DoughnutChart
    },
    setup(props) {
        const options = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: "bottom",
                },
                title: {
                    display: false,
                    text: "Chart.js Doughnut Chart",
                },
            },
        });

        const chartData = ref({
            labels: props.data.areas,
            datasets: [
                {
                data: props.data.accidentsByArea,
                backgroundColor: [
                    '#FF6384', // Red
                    '#36A2EB', // Blue
                    '#FFCE56', // Yellow
                    '#4BC0C0', // Green
                    '#9966FF', // Purple
                    '#FF9F40', // Orange
                ],
                },
            ],
        });

        watch(() => props.data, (newData) => {
            chartData.value.labels = newData.areas;
            chartData.value.datasets[0].data = newData.accidentsByArea;
        });

        return {
            chartData,
            options
        }
    }
}
</script>