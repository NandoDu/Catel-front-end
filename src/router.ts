import {createRouter, createWebHistory} from 'vue-router';
import routes from './config/route';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes,
});

export default router;
