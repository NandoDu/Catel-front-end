import Login from '../page/Login.vue';
import Home from '../page/Home.vue';
import roomList from '../component/PriceContainer.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/roomList', component: roomList},
];

export default routes;