<template>
    <div class="container-fluid">
        <app-parameter></app-parameter>
        <app-dropdown></app-dropdown>
        <app-chart></app-chart>
    </div>
</template>

<script>
    import Parameter from './parameter/Parameters.vue'
    import Chart from './Chart.vue'
    import Dropdown from './Dropdown.vue'

    export default {
        components: {
            appParameter: Parameter,
            appChart: Chart,
            appDropdown: Dropdown
        }
    }
</script>

<style>

</style>