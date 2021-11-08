import Login from '../page/Login.vue';
import Home from '../page/Home.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/login', component: Login}
];

export default routes;