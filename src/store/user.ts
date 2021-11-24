import {Module} from 'vuex';
import {login, LoginO} from '../api/userApi';
import actCon from './actCon';

interface UserState {
  logged: boolean;
  username?: string;
  userId?: number;
}

const user: Module<UserState, unknown> = {
  namespaced: true,
  state: {
    logged: false,
  },
  mutations: {
    afterLogin: (state, userInfo: LoginO) => {
      state.logged = true;
      state.userId = userInfo.id;
      state.username = userInfo.username;
    },
    logout: (state) => {
      state.logged = false;
    },
  },
  actions: {
    login: actCon(login, 'afterLogin'),
  },
  getters: {
    logged: state => state.logged,
    username: state => state.username,
    userId: state => state.userId,
  },
};

export default user;
export {
  UserState,
};
