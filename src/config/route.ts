import Login from '../page/Login.vue';
import Home from '../page/Home.vue';
import roomList from '../component/PriceContainer.vue';
import Info from '../page/HotelInfo.vue';
<<<<<<< HEAD
import PersonalInfo from '../page/PersonalInfo.vue'
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/roomList', component: roomList},
  {path: '/info', component: Info},
  {path: '/personalInfo', component: PersonalInfo}
=======
import {NavigationGuard, RouteRecordRaw} from 'vue-router';
import {store} from '../store';

const allowNotLogged: NavigationGuard = (to, from) => {
  const ok = !store.getters['user/logged'];
  console.log('[Redirect] Already Login');
  if (!ok) return '/';
};
const allowLogged: NavigationGuard = (to, from) => {
  const ok = store.getters['user/logged'];
  if (!ok) return 'login';
};

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/login', component: Login, beforeEnter: allowNotLogged},
  {path: '/roomList', component: roomList, beforeEnter: allowLogged},
  {path: '/hotel/:id', component: Info},
>>>>>>> fb6dd7725bf342d1ac3c3c2c1e9c497f29a63373
];

export default routes;
