<template>
    <div class="container-fluid">
        <app-parameter></app-parameter>
        <app-dropdown></app-dropdown>
        <app-chart :chartData="chartData"></app-chart>
    </div>
</template>

<script>
    import Parameter from './parameter/Parameters.vue'
    import Chart from './Chart.vue'
    import Dropdown from './Dropdown.vue'

    export default {
        data() {
            return {
                // chartData: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3]
                chartData: [{ 
                    title: 'Temperature Chart', 
                    yAxisTitle: 'Temperature (°C)', 
                    valueSuffix: '°C', 
                    dataSensor: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3]
                }]
            }
        },
        components: {
            appParameter: Parameter,
            appChart: Chart,
            appDropdown: Dropdown
        }
    }
</script>

<style>

</style>