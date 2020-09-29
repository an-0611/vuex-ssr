// feature: 將渲染vue實例手動掛載到DOM上，將server渲然完成的vue實例轉變為vue管理的動態DOM
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import { createApp } from './main.js';

const { app } = createApp();
app.$mount('#app');
