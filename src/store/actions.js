import {
  ADD_QUESTION_FAILURE,
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESSFUL,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESSFUL,
  SET_QUESTION_TYPE,
} from './mutationTypes';
import * as api from '../helpers/api';

export const setQuestionType = ({ commit }, status) => (
  commit(SET_QUESTION_TYPE, status)
);

export const addQuestion = ({ commit }, data) => {
  commit(ADD_QUESTION_REQUEST);

  return api.createQuestion(data)
    .then(r => commit(ADD_QUESTION_SUCCESSFUL, { data: r }))
    .catch(errors => commit(ADD_QUESTION_FAILURE, { errors }));
};

export const deleteQuestion = ({ commit }, id) => {
  commit(DELETE_QUESTION_REQUEST, { id });

  return api.deleteQuestion(id)
    .then(r => commit(DELETE_QUESTION_SUCCESSFUL, { id }))
    .catch(errors => commit(DELETE_QUESTION_FAILURE, { errors, id }));
};
