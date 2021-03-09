import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import css from '../src/assets/css/style.css';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  css,
  render: (h) => h(App),
}).$mount('#app');
