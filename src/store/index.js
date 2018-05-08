import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
import * as types from './questionTypes';
import _ from 'lodash'

Vue.use(Vuex);

const state = {
  test: {
    fetching: false,
    creating: false,
    error: false,
    errors: {},
    data: {
      title: '',
      questions: [],
      description: '',
      section: '',
      timeLimit: '',
      passingScorePercent: '',
      retakeTimeout: ''
    }
  },
  questionType: Object.keys(types)[0],
  questions: [],
  answers: [],
  readingQuestions: [],
  readingText: '',
  sections: [],
  courseId: ''
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    getReadingText: state => {
      return state.readingText
    },
    getAnswersByQuestionId: (state) => (id) => {
      return state.answers.filter(answer => answer.questionId === id);
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
      return state.test.data.passingScorePercent;
    },
    getQuestionText: state => {
      return state.test.data.title;
    },

  },

});
