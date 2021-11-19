import Login from '../page/Login.vue';
import Home from '../page/Home.vue';
import OrderDetail from '../page/OrderDetail.vue';
import roomList from '../component/PriceContainer.vue';
import Info from '../page/HotelInfo.vue';
import hotelInfo from '../component/hotelInfo.vue';
import Comment from '../component/CommentCard.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/roomList', component: roomList},
  {path: '/hotelInfo', component: hotelInfo},
  {path: '/hotel/:id', component: Info},
  {path: '/comment', component: Comment},
  {path: '/order', component: OrderDetail},
];

export default routes;