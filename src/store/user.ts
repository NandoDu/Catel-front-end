import {Module} from 'vuex';
import {loginAPI, LoginO} from '../api/userApi';
import actCon from './actCon';

interface UserState {
  logged: boolean;
  username?: string;
}

const user: Module<UserState, unknown> = {
  namespaced: true,
  state: {
    logged: false,
  },
  mutations: {
    afterLogin: (state, userInfo: LoginO) => {
      state.logged = true;
      state.username = userInfo.username;
    },
    logout: (state) => {
      state.logged = false;
    },
  },
  actions: {
    login: actCon(loginAPI, 'afterLogin'),
  },
  getters: {
    logged: state => state.logged,
    username: state => state.username,
  },
};

export default user;
export {
  UserState,
};
