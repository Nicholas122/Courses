import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
import * as types from './questionTypes';

Vue.use(Vuex);

const state = {
  test: {
    fetching: false,
    creating: false,
    error: false,
    errors: {},
    data: {}
  },
  questionType: Object.keys(types)[0],
  questions: [],
  answers: [],
  readingQuestions: [],
  readingText: '',
  sections: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    getReadingText: state => {
      return state.readingText
    },
    getAnswersByQustionsId: (state) => (id) => {
      return state.answers.find(answer => answer.questionId === id)
    },
    getTestTitle: state => {
      return state.test.data.title;
    },
    getTestDescription: state => {
      return state.test.data.description;
    },
    getTestSection: state => {
      return state.test.data.section;
    },
    getTestTimeLimit: state => {
      return state.test.data.timeLimit;
    },  
    getTestRetakeTimeout: state => {
      return state.test.data.retakeTimeout;
    },
    getTestRate: state => {
      return state.test.data.rate;
    },  
  }
});
