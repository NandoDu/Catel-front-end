import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {key, store} from './store';
import {Avatar} from '@element-plus/icons';
import i18n from './config/i18n/i18n';

createApp(App)
  .use(router)
  .use(store, key)
  .use(i18n)
  .component('avatar', Avatar)
  .mount('#app');
