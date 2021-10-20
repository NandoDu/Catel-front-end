import { Module } from 'vuex';
import { loginAPI, LoginO } from '../api/userApi';
import actCon from './actCon';

interface UserState {
  username: string
}

const user: Module<UserState, unknown> = {
  namespaced: true,
  mutations: {
    afterLogin: (state, userInfo: LoginO) => {
      state.username = userInfo.username;
    },
  },
  actions: {
    login: actCon(loginAPI, 'afterLogin'),
  },
};

export default user;
export {
  UserState,
};