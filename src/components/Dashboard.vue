<template>
    <div class="container-fluid">
        <app-parameter :parameters="parameters"></app-parameter>
        <app-dropdown @changeChart="selectedParameter = $event"></app-dropdown>
        <app-chart :parameters="parameters" :selectedParameter="selectedParameter"></app-chart>
    </div>
</template>

<script>
    import Parameter from './parameter/Parameters.vue'
    import Chart from './Chart.vue'
    import Dropdown from './Dropdown.vue'

    export default {
        data() {
            return {
                selectedParameter: 2,
                parameters: [{ 
                        name: 'Temperature',
                        icon: 'fas fa-temperature-low', 
                        color: 'lightseagreen',
                        chartTitle: 'Temperature Chart', 
                        yAxisTitle: 'Temperature (°C)', 
                        valueSuffix: '°C', 
                        dataSensor: [21.4, 24.5, 23.1, 26.4, 28.6, 29.4, 27.2, 26.5, 24.3, 22.3]
                    }, {
                        name: 'Humidity',
                        icon: 'fas fa-tint', 
                        color: 'lightskyblue',
                        chartTitle: 'Humidity Chart', 
                        yAxisTitle: 'Humidity (%)', 
                        valueSuffix: '%', 
                        dataSensor: [15.4, 13.9, 19.5, 20.5, 25.2, 21.5, 22.2, 20.5, 23.3, 18.3]
                    }, {
                        name: 'Light Intensity',
                        unit: 'lux',
                        icon: 'far fa-sun', 
                        color: 'gold',
                        chartTitle: 'Light Intensity Chart', 
                        yAxisTitle: 'Light Intensity (lux)', 
                        valueSuffix: 'lux', 
                        dataSensor: [1200, 2300, 6034, 9034, 15490, 24233, 45500, 63400, 40553, 42300]
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