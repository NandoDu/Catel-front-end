import { InjectionKey } from 'vue';
import { createStore, Store, useStore as _useStore} from 'vuex';
import user, { UserState } from './user';

type VuexState = UserState
const key: InjectionKey<Store<VuexState>> =Symbol();
const store = createStore({
  modules: {
    user,
  },
  plugins: [

  ],
});
const useTypedStore = () => _useStore(key);

export {
  store, key, 
  useTypedStore,
};