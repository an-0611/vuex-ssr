import Vue from 'vue';
import App from './App.vue';
// import store from './store';
// import router from './router';
import { createRouter } from './router';
// import { i18n } from './i18n';
import './filters';
import './preloader';
import './styles/global.scss';

Vue.config.productionTip = false;

// eslint-disable-next-line import/prefer-default-export
export function createApp() {
  // create router instance
  const router = createRouter();

  const app = new Vue({
    // store,
    router,
    // i18n,
    render: (h) => h(App),
  });

  return { app, router }; // 輸出給 server.js 使用
}
