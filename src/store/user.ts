import {Module} from 'vuex';
import {getUserAPI, loginAPI, LoginO} from '../api/userApi';
import actCon from './actCon';

interface UserState {
  logged: boolean;
  userId?: number;
  email?: string;
  username?: string;
  credit?: number,
  userType?: string,
  premium?: string,
  avatar?: string,
}

const user: Module<UserState, unknown> = {
  namespaced: true,
  state: {
    logged: false,
  },
  mutations: {
    afterLogin: (state, userInfo: LoginO) => {
      console.log(userInfo);
      state.logged = true;
      state.userId = userInfo.id;
      state.email = userInfo.email;
      state.username = userInfo.username;
      state.credit = userInfo.credit;
      state.userType = userInfo.userType;
      state.premium = userInfo.vipType;
      state.avatar = userInfo.avatar;
    },
    logout: (state) => {
      state.logged = false;
    },
  },
  actions: {
    login: actCon(loginAPI, 'afterLogin'),
    refreshUser: actCon(getUserAPI, 'afterLogin'),
  },
  getters: {
    all: state => state as UserState,
    logged: state => state.logged,
    username: state => state.username,
    userId: state => state.userId,
  },
};

export default user;
export {
  UserState,
};
