<template>
    <div>
        <div class="row">
            <app-parameter v-for="parameter in parameters" :parameter="parameter"></app-parameter>
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
                { name: 'Suhu', unit: '°C', icon: 'fas fa-temperature-low', color: 'lightseagreen' },
                { name: 'Kelembaban', unit: '%', icon: 'fas fa-tint', color: 'lightskyblue' },
                { name: 'Intensitas Cahaya', unit: 'lux', icon: 'far fa-sun', color: 'gold' }
            ],
            moment: moment
        }
    },
    components: {
        appParameter: Parameter
    }    
}
</script>