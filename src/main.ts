import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {key, store} from './store';
import {Avatar} from '@element-plus/icons';

createApp(App)
  .use(router)
  .use(store, key)
  .component('avatar', Avatar)
  .mount('#app');
