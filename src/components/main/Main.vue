<template>
    <div class="main">
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '../Header.vue'

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        margin-left: 225px;
    }
</style>