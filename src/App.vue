<template>
  <div class="container-fluid">
    <div class="row">
      <app-sidebar></app-sidebar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import Main from './components/main/Main.vue'
  import Sidebar from './components/sidebar/Sidebar.vue'

  export default {
    components: {
      appMain: Main,
      appSidebar: Sidebar
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0 auto;
    font-family: 'Montserrat', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fafafa;
  }
</style>