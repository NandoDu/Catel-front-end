import { Module } from 'vuex';
import {RoomInfoO} from '../api/userApi';


interface RoomState {
  roomInfoList: RoomInfoO
}

const room: Module<RoomState, unknown> = {
  namespaced: true,
  mutations: {

  },
  actions: {

  },
  getters: {

  },
};

export default room;
export {
  RoomState,
};