import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  test: {},
  questions: {
    fetching: false,
    creating: false,
    error: false,
    errors: {},
    list: [],
  },
  answers: [],
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
