import { InjectionKey } from 'vue';
import { createStore, Store, useStore as _useStore} from 'vuex';
import user, { UserState } from './user';
import room, {RoomState} from './room';

type VuexState = UserState|RoomState
const key: InjectionKey<Store<VuexState>> =Symbol();
const store = createStore({
  modules: {
    user, room,
  },
  plugins: [

  ],
});
const useTypedStore = () => _useStore(key);

export {
  store, key, 
  useTypedStore,
};