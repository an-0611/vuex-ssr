import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const Home1 = () => import('./views/Home1.vue');

Vue.use(Router);

// eslint-disable-next-line import/prefer-default-export
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/1',
        name: 'Home1',
        component: Home1,
      },
    ],
  });
}
