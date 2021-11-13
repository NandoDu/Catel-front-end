import {Module} from 'vuex';
import {HotelInfoO, HotelInfoAPI} from '../api/userApi';
import actCon from './actCon';

interface HotelState {
  hotelInfo: HotelInfoO;
}

const hotel: Module<HotelState, unknown> = {
  namespaced: true,
  mutations: {
    afterGetHotelInfo: (state, hotelInfo: HotelInfoO) => {
      state.hotelInfo = hotelInfo;
    },
  },
  actions: {
    getHotelInfo: actCon(HotelInfoAPI, 'afterGetHotelInfo'),
  },
  getters: {
    hotelInfo: state => state.hotelInfo,
  },
};

export default hotel;
export {
  HotelState,
};