<template>
    <div class="dropdown">
        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Chart
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="setAsTemp">Temperature</a>
            <a class="dropdown-item" @click="setAsHum">Humidity</a>
            <a class="dropdown-item" @click="setAsIntensity">Light Intensity</a>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    methods: {
        setAsTemp() {
            this.selectedParameter = 0;
            eventBus.$emit('changeChart', this.selectedParameter);
        },
        setAsHum() {
            this.selectedParameter = 1;
            eventBus.$emit('changeChart', this.selectedParameter);
        },
        setAsIntensity() {
            this.selectedParameter = 2;
            eventBus.$emit('changeChart', this.selectedParameter);
        }
    }
}
</script>

<style lang="scss" scoped>
    .dropdown {
        margin-bottom: 15px;
    }
</style>