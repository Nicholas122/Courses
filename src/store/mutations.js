import {
  ADD_QUESTION_FAILURE,
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESSFUL,
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESSFUL,
  SET_QUESTION_TYPE,
} from './mutationTypes';

export default {
  [SET_QUESTION_TYPE](state, status) {
    state.questionType = status;
  },
  [DELETE_QUESTION_FAILURE](state, { id, errors }) {
    state.questions.list = state.questions.list.map((i) => {
      if (i.id !== id) {
        return i;
      }

      return {
        ...i,
        errors,
        deleteError: true,
        deleting: false,
      };
    });
  },
  [DELETE_QUESTION_REQUEST](state, { id }) {
    state.questions.list = state.questions.list.map((i) => {
      if (i.id !== id) {
        return i;
      }

      return {
        ...i,
        errors,
        deleteError: false,
        deleting: true,
      };
    });
  },
  [DELETE_QUESTION_SUCCESSFUL](state, { id }) {
    state.questions.list = state.questions.list.filter(i => i.id !== id);
  },
  [ADD_QUESTION_REQUEST](state) {
    state.questions = {
      creating: true,
      error: false,
      errors: {},
      ...state.questions,
    };
  },
  [ADD_QUESTION_FAILURE](state, errors) {
    state.questions = {
      creating: false,
      error: true,
      errors: errors,
    };
  },
  [ADD_QUESTION_SUCCESSFUL](state, data) {
    state.questions = {
      creating: false,
      list: [
        data,
        ...state.questions.list,
      ],
    };
  },
};
