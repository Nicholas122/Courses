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
import * as api from '../helpers/api';

export const setQuestionType = ({ commit }, status) => (
  commit(SET_QUESTION_TYPE, status)
);

export const addQuestion = ({ commit }, data) => (
  commit(ADD_QUESTION, data)
);

export const deleteQuestion = ({ commit }, id) => (
  commit(DELETE_QUESTION, { id })
);

export const addAnswer = ({ commit }, data) => (
  commit(ADD_ANSWER, data)
);

export const deleteAnswer = ({ commit }, id) => (
  commit(DELETE_ANSWER, { id })
);

export const addReadingQuestion = ({ commit }, data) => (
  commit(ADD_READING_QUESTION, data)
);

export const deleteReadingQuestion = ({ commit }, id) => (
  commit(DELETE_READING_QUESTION, { id })
);
export const setReadingText = ({ commit }, text) => (
  commit(SET_READING_TEXT, text)
);

export const fetchSections = ({commit}, courseId) => {
  return api.getSections(courseId).then(data => commit(SET_SECTIONS, data));
}