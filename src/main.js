import '@/assets/scss/main.scss';

import Vue from 'vue';
import App from './App';
import router from './config/router';
import store from './vuex/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
