import {
  ADD_QUESTION,
  DELETE_QUESTION,
  ADD_ANSWER,
  DELETE_ANSWER,
  ADD_READING_QUESTION,
  DELETE_READING_QUESTION,
  SET_QUESTION_TYPE,
  SET_READING_TEXT,
  SET_SECTIONS
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
      question.subQuestion = state.readingQuestions;
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
};
