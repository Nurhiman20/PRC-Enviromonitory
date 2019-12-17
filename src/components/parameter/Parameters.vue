<template>
    <div>
        <div class="row">
            <app-parameter v-for="parameter in parameters" :parameter="parameter" v-bind:key="parameter"></app-parameter>
        </div>
    </div>
</template>

<script>
import Parameter from './Parameter.vue'

export default {
    props: ['parameters'],
    components: {
        appParameter: Parameter
    }    
}
</script>