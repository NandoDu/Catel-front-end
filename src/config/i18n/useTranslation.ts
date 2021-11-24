import {useI18n} from 'vue-i18n';
import zh from './zh';
import {computed} from 'vue';

const useTranslation = <Word extends (keyof typeof zh | string)>(words: Word[]) => {
  const {t} = useI18n();
  const _t = (word: string) => t(`message.${word}`);
  return computed(() => {
    const dic = {} as Record<Word, string>;
    words.forEach(word => dic[word] = _t(word));
    return dic;
  });
};

export default useTranslation;
