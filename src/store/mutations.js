import {
  ADD_QUESTION,
  DELETE_QUESTION,
  ADD_ANSWER,
  DELETE_ANSWER,
  ADD_READING_QUESTION,
  DELETE_READING_QUESTION,
  SET_QUESTION_TYPE,
  SET_READING_TEXT,
  SET_SECTIONS,
  CREATE_TEST_REQUEST,
  CREATE_TEST_SUCCESSFUL,
  CREATE_TEST_FAILURE,
  SET_TEST_TITLE,
  SET_TEST_DESCRIPTION,
  SET_TEST_SECTION,
  SET_TEST_TIME_LIMIT,
  SET_TEST_RATE,
  SET_TEST_RETAKE_TIMEOUT,
  MERGE_TEST_DATA
} from './mutationTypes';

export default {
  [SET_QUESTION_TYPE](state, status) {
    state.questionType = status;
  },
  [DELETE_QUESTION](state, { id }) {
    state.questions = state.questions.filter(i => i.id !== id);
  },
  [ADD_QUESTION](state, question) {
    question.id = state.questions.length + 1;
    question.answers = state.answers;
    question.type = state.questionType;

    if (question.type === 'READING_TEXT') {
      question.subQuestions = state.readingQuestions;
      question.readingText = state.readingText;

      state.readingQuestions = [];
      state.readingText = '';
    }

    state.answers = [];

    state.questions.push(question);
  },
  [DELETE_ANSWER](state, { id }) {
    state.answers = state.answers.filter(i => i.id !== id);
  },
  [ADD_ANSWER](state, answer) {
    answer.id = state.answers.length + 1;
    state.answers.push(answer);
  },
  [SET_READING_TEXT](state, text) {
    state.readingText = text;
  },
  [DELETE_READING_QUESTION](state, { id }) {
    state.readingQuestions = state.questions.filter(i => i.id !== id);
  },
  [ADD_READING_QUESTION](state, question) {
    question.id = state.readingQuestions.length + 1;
    question.answers = state.answers;
    state.answers = [];

    state.readingQuestions.push(question);
  },
  [SET_SECTIONS](state, sections) {
    state.sections = sections;
  },

  [CREATE_TEST_REQUEST](state) {
    state.test.creating = true;
  },
  [CREATE_TEST_SUCCESSFUL](state) {
    state.questions = [];
    
    state.test = {
      fetching: false,
      creating: false,
      error: false,
      errors: {},
      data: {}
    };
  },
  [CREATE_TEST_FAILURE](state, errors) {
    state.test = {
      creating: false,
      error: true,
      errors: errors,
    };
  },

  [SET_TEST_TITLE](state, title) {
    state.test.data.title = title;
  },

  [SET_TEST_TITLE](state, title) {
    state.test.data.title = title;
  },

  [SET_TEST_DESCRIPTION](state, description) {
    state.test.data.description = description;
  },

  [SET_TEST_SECTION](state, section) {
    state.test.data.section = section;
  },

  [SET_TEST_TIME_LIMIT](state, timeLimit) {
    state.test.data.timeLimit = timeLimit;
  },

  [SET_TEST_RATE](state, rate) {
    state.test.data.rate = rate;
  },

  [SET_TEST_RETAKE_TIMEOUT](state, retakeTimeOut) {
    state.test.data.retakeTimeOut = retakeTimeOut;
  },

  [MERGE_TEST_DATA](state) {
    state.test.data.questions = state.questions;
  },


};
