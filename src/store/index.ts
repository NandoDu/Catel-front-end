import { InjectionKey } from 'vue';
import { createStore, Store, useStore as _useStore} from 'vuex';
import user, { UserState } from './user';
import room, {RoomState} from './room';
import hotel, {HotelState} from './hotel';

type VuexState = UserState|RoomState|HotelState
const key: InjectionKey<Store<VuexState>> =Symbol();
const store = createStore({
  modules: {
    user, room, hotel,
  },
  plugins: [

  ],
});
const useTypedStore = () => _useStore(key);

export {
  store, key, 
  useTypedStore,
};