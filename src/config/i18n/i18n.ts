import {createI18n} from 'vue-i18n';
import zh from './zh';
import en from './en';
import {store} from '../../store';

const messages = {
  zh: {
    message: zh,
  },
  en: {
    message: en,
  },
};

type Locales = 'zh' | 'en';
type UpperLocales = Uppercase<Locales>

const i18n = createI18n<typeof zh, Locales>({
  legacy: false,
  locale: store.getters['config/appLocale'],
  fallbackLocale: 'zh',
  messages,
});

export default i18n;

export {
  UpperLocales,
};
