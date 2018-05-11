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
    getAnswersByQuestionId: (state) => (id) => {
      var answers =  state.answers.filter(answer => answer.questionId === id);

      if (answers.length === 0) {
        state.answers = [
          { 
            id:'1',  
            text:'',
            questionId: id,
            correct: true,
            
          },
          { 
            id:'2',  
            text:'',
            questionId: id,
            correct:'',
            
          },
          { 
            id:'3',  
            text:'',
            questionId: id,
            correct:'',
            
          },
          { 
            id:'4',  
            text:'',
            questionId: id,
            correct:'',
            
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
