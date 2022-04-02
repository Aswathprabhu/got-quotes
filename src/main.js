import Vue from 'vue';
import App from './components/App.vue';
import { makeServer } from './server';

Vue.config.productionTip = false;

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

new Vue({
  render: (h) => h(App),
}).$mount('#app');
