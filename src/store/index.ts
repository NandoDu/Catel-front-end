import {InjectionKey} from 'vue';
import {createStore, Store, useStore as _useStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import user, {UserState} from './user';
import room, {RoomState} from './room';
import hotel, {HotelState} from './hotel';
import config, {ConfigState} from './config';


type VuexState = UserState | RoomState | HotelState | ConfigState
const key: InjectionKey<Store<VuexState>> = Symbol();
const store = createStore({
  modules: {
    user, room, hotel, config,
  },
  plugins: [createPersistedState()],
});
const useTypedStore = () => _useStore(key);

export {
  store, key,
  useTypedStore,
};
