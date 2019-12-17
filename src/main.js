import Vue from 'vue';
import VueRouter from 'vue-router';
import HighchartsVue from 'highcharts-vue'

import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(HighchartsVue);

const router = new VueRouter({
  mode: 'history',
  routes
});

export const eventBus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
