import {useI18n} from 'vue-i18n';
import {UpperLocales} from './i18n';
import {computed} from 'vue';

const useGlobalLocale = () => {
  const {locale} = useI18n();
  return computed(() => locale.value.toUpperCase() as UpperLocales);
};

export default useGlobalLocale;
