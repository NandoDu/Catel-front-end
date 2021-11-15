import { Module } from 'vuex';
import {loginAPI, LoginO} from '../api/userApi';
import actCon from './actCon';

interface UserState {
  username?: string
}

const user: Module<UserState, unknown> = {
  namespaced: true,
  mutations: {
    afterLogin: (state, userInfo: LoginO) => {
      state.username = userInfo.username;
    },
    logout: (state) => {
      state.username = undefined;
    }, 
  },
  actions: {
    login: actCon(loginAPI, 'afterLogin'),
  },
  getters: {
    username: state => state.username,
  },
};

export default user;
export {
  UserState,
};
