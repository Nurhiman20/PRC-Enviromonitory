<template>
    <div class="main">
        <app-header></app-header>
        <div class="view">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from '../Header.vue'
    import Footer from '../Footer.vue'

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 100%;
        margin-left: 225px;
        .view {
            margin-left: 3%;
        }
    }
</style>