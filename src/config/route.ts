import Login from '../page/Login.vue';
import Home from '../page/Home.vue';
import OrderDetail from '../page/OrderDetail.vue';
import Info from '../page/HotelInfo.vue';
import PersonalInfo from '../page/PersonalInfo.vue';
import Hotels from '../page/Hotels.vue';
import OrderDetailPage from '../page/OrderDetailPage.vue';
import AboutUs from '../page/AboutUs.vue';
import {NavigationGuard, RouteRecordRaw} from 'vue-router';
import {store} from '../store';
import {ElMessage} from 'element-plus';

const allowNotLogged: NavigationGuard = (to, from) => {
  const ok = !store.getters['user/logged'];
  if (!ok) {
    console.log('[Redirect] Already Login');
    return '/';
  }
};

const allowLogged: NavigationGuard = (to, from) => {
  const ok = store.getters['user/logged'];
  if (!ok) return {path: '/login', query: {redirect: to.path}};
};

const preventRecommit: NavigationGuard = (to, from) => {
  const recommit = from.matched[0]?.path === '/order-detail/:orderId';
  if (!recommit) return;
  ElMessage.warning({
    message: '订单已提交，可在个人中心内查看',
    center: true,
  });
  return '/';
};

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/order', component: OrderDetail, beforeEnter: preventRecommit},
  {path: '/hotels', component: Hotels},
  {path: '/login', component: Login, beforeEnter: allowNotLogged},
  {path: '/hotel/:id', component: Info},
  {path: '/personalInfo', component: PersonalInfo, beforeEnter: allowLogged},
  {path: '/order-detail/:orderId', component: OrderDetailPage},
  {path: '/about-us', component: AboutUs},
];

export default routes;
