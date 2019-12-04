<template>
    <div class="container-fluid">
        <app-parameter></app-parameter>
        <app-chart></app-chart>
    </div>
</template>

<script>
    import Parameter from './parameter/Parameters.vue'
    import Chart from './Chart.vue'

    export default {
        components: {
            appParameter: Parameter,
            appChart: Chart
        }
    }
</script>

<style>

</style>