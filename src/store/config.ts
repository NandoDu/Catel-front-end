import {Module} from 'vuex';

interface ConfigState {
  appLocale: string;
}

const config: Module<ConfigState, unknown> = {
  state: {
    appLocale: 'zh',
  },
  namespaced: true,
  mutations: {
    setAppLocale: (state, payload: string) => {
      state.appLocale = payload;
    },
  },
  getters: {
    appLocale: state => state.appLocale,
  },
};

export default config;

export {ConfigState};
