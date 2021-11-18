import {Module} from 'vuex';
import {HotelInfoO, HotelInfoAPI, GetCommentAPI, GetCommentO} from '../api/userApi';
import actCon from './actCon';

interface HotelState {
  hotelInfo: HotelInfoO;
  commentList: GetCommentO
}

const hotel: Module<HotelState, unknown> = {
  namespaced: true,
  mutations: {
    afterGetHotelInfo: (state, hotelInfo: HotelInfoO) => {
      state.hotelInfo = hotelInfo;
    },
    afterGetComment: (state, commentList: GetCommentO)=>{
      state.commentList = commentList;
    },
  },
  actions: {
    getHotelInfo: actCon(HotelInfoAPI, 'afterGetHotelInfo'),
    getComment: actCon(GetCommentAPI, 'afterGetComment'),
  },
  getters: {
    hotelInfo: state => state.hotelInfo,
    commentList: state=>state.commentList,
  },
};

export default hotel;
export {
  HotelState,
};