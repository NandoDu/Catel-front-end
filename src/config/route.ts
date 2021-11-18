import Login from '../page/Login.vue';
import Home from '../page/Home.vue';
import roomList from '../component/PriceContainer.vue';
import Info from '../page/HotelInfo.vue';
import PersonalInfo from '../page/PersonalInfo.vue';
import {NavigationGuard, RouteRecordRaw} from 'vue-router';
import {store} from '../store';

const allowNotLogged: NavigationGuard = (to, from) => {
  const ok = !store.getters['user/logged'];
  if (!ok) {
    console.log('[Redirect] Already Login');
    return '/';
  }
};
const allowLogged: NavigationGuard = (to, from) => {
  const ok = store.getters['user/logged'];
  if (!ok) return {path: 'login', query: {redirect: to.path}};
};

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/login', component: Login, beforeEnter: allowNotLogged},
  {path: '/roomList', component: roomList, beforeEnter: allowLogged},
  {path: '/hotel/:id', component: Info},
  {path: '/roomList', component: roomList},
  {path: '/info', component: Info},
  {path: '/personalInfo', component: PersonalInfo, beforeEnter: allowLogged},
];

export default routes;
