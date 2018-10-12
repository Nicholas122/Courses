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
    created: false,
    error: false,
    errors: {},
    data: {
      title: '',
      questions: [],
      description: '',
      section: '',
      timeLimit: '',
      passingScorePercent: 60,
      retakeTimeout: ''
    }
  },
  questionType: 'USER_INPUT',
  questions: [],
  answers: [],
  readingQuestions: [],
  readingText: '',
  sections: [],
  courseId: '',
  questionComponent: 'add-question',
  editedQuestion: {},
  questionId: 1
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    getReadingText: state => {
      return state.readingText
    },
    getQuestionType: state => {
      return state.questionType;
    },
    getAnswersByQuestionId: (state) => (id) => {
      var answers =  state.answers.filter(answer => answer.questionId === id);

      if (answers.length === 0) {
        state.answers = [
          { 
            id:'1',  
            text:'',
            questionId: id,
            correct: true,
            uid: 1
          },
          { 
            id:'2',  
            text:'',
            questionId: id,
            correct:'',
            uid: 2
          },
          { 
            id:'3',  
            text:'',
            questionId: id,
            correct:'',
            uid: 3
          },
          { 
            id:'4',  
            text:'',
            questionId: id,
            correct:'',
            uid: 4
          }
        ]
      }
      
      return state.answers.filter(answer => answer.questionId === id);
    },
    getTestTitle: state => {
      return state.test.data.title;
    },
    getTestDescription: state => {
      return state.test.data.description;
    },
    getTestSection: state => {
      return state.test.data.section.id;
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
