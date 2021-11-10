import { Module } from 'vuex';
import { RoomInfoAPI, RoomInfoO} from '../api/userApi';
import actCon from './actCon';

interface RoomState {
  roomInfoList: RoomInfoO
}

const room: Module<RoomState, unknown> = {
  namespaced: true,
  mutations: {
    afterRoomInfo: (state, roomInfoList: RoomInfoO) =>{
      state.roomInfoList = roomInfoList;
    },
  },
  actions: {
    roomInfo: actCon(RoomInfoAPI, 'afterRoomInfo'),
  },
  getters: {
    roomInfo: state => state.roomInfoList,
  },
};

export default room;
export {
  RoomState,
};