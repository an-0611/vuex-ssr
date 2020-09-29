import services from '../services';

const state = {
  balance: null,
};

const UPDATE_BALANCE = 'UPDATE_BALANCE';

const actions = {
  async getProfile({ commit }) {
    const { cp } = await services.getProfile();
    commit(UPDATE_BALANCE, cp);
  },
};

/* eslint-disable no-param-reassign, no-shadow */
const mutations = {
  [UPDATE_BALANCE](state, balance) {
    state.balance = balance;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
