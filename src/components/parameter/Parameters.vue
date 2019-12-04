<template>
    <div>
        <div class="row">
            <app-parameter v-for="parameter in parameters" :parameter="parameter" v-bind:key="parameter"></app-parameter>
        </div>
    </div>
</template>

<script>
import Parameter from './Parameter.vue'

var moment = require('moment');

export default {
    data() {
        return {
            parameters: [
                { name: 'Temperature', unit: '°C', icon: 'fas fa-temperature-low', color: 'lightseagreen' },
                { name: 'Humidity', unit: '%', icon: 'fas fa-tint', color: 'lightskyblue' },
                { name: 'Light Intensity', unit: 'lux', icon: 'far fa-sun', color: 'gold' }
            ],
            moment: moment
        }
    },
    components: {
        appParameter: Parameter
    }    
}
</script>