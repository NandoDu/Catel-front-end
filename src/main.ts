import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { key, store } from './store';
import{Avatar} from '@element-plus/icons';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

createApp(App)
  .use(router)
  .use(ElementPlus, {locale: zhCn})
  .use(store, key)
  .component('avatar', Avatar)
  .mount('#app');