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
    EDIT_TEST_REQUEST,
    EDIT_TEST_SUCCESSFUL,
    EDIT_TEST_FAILURE,
    SET_TEST_TITLE,
    SET_TEST_DESCRIPTION,
    SET_TEST_SECTION,
    SET_TEST_TIME_LIMIT,
    SET_TEST_RATE,
    SET_TEST_RETAKE_TIMEOUT,
    MERGE_TEST_DATA,
    SET_TEST_DATA,
    SET_QUESTION_DATA,
    SET_COURSE_ID,
    EDIT_QUESTION,
    FETCH_EDIT_QUESTION
} from './mutationTypes';
import * as api from '../helpers/api';

export const setQuestionType = ({commit}, status) => (
    commit(SET_QUESTION_TYPE, status)
);

export const addQuestion = ({commit}, data) => (
    commit(ADD_QUESTION, data)
);

export const deleteQuestion = ({commit}, id) => (
    commit(DELETE_QUESTION, {id})
);

export const addAnswer = ({commit}, data) => (
    commit(ADD_ANSWER, data)
);

export const deleteAnswer = ({commit}, uid) => (
    commit(DELETE_ANSWER, {uid})
);

export const addReadingQuestion = ({commit}, data) => (
    commit(ADD_READING_QUESTION, data)
);

export const deleteReadingQuestion = ({commit}, id) => (
    commit(DELETE_READING_QUESTION, {id})
);
export const setReadingText = ({commit}, text) => (
    commit(SET_READING_TEXT, text)
);

export const setTestTitle = ({commit}, title) => (
    commit(SET_TEST_TITLE, title)
);

export const setTestDescription = ({commit}, description) => (
    commit(SET_TEST_DESCRIPTION, description)
);

export const setTestSection = ({commit}, section) => (
    commit(SET_TEST_SECTION, section)
);

export const setTestTimeLimit = ({commit}, timeLimit) => (
    commit(SET_TEST_TIME_LIMIT, timeLimit)
);

export const setTestRate = ({commit}, rate) => (
    commit(SET_TEST_RATE, rate)
);

export const setTestRetakeTimeout = ({commit}, retakeTimeout) => (
    commit(SET_TEST_RETAKE_TIMEOUT, retakeTimeout)
);

export const fetchSections = ({commit}, courseId) => {
    return api.getSections(courseId).then(data => commit(SET_SECTIONS, data));
}

export const mergeTestData = ({commit}) => {
    commit(MERGE_TEST_DATA);
}

export const createTestRequest = ({commit}, data) => {
    commit(CREATE_TEST_REQUEST);

    return api.createTest(data)
        .then(r => commit(CREATE_TEST_SUCCESSFUL, {data: r}))
        .catch(errors => commit(CREATE_TEST_FAILURE, {errors}));
}

export const editTestRequest = ({commit}, data) => {
    commit(EDIT_TEST_REQUEST);
    return api.editTest(data, data.data.id)
        .then(r => commit(EDIT_TEST_SUCCESSFUL, {data: r}))
        .catch(errors => commit(EDIT_TEST_FAILURE, {errors}));
}

export const fetchTest = ({commit}, testId) => {
    return api.getTest(testId).then(data => commit(SET_TEST_DATA, data));
}

export const fetchQuestion = ({commit}, testId) => {
    return api.getQuestion(testId).then(data => commit(SET_QUESTION_DATA, data));
}

export const setCourseId = ({commit}, courseId) => {
    commit(SET_COURSE_ID, courseId);
}

export const editQuestion = ({commit}, questionId) => {
    commit(FETCH_EDIT_QUESTION, questionId);
}

export const saveQuestion = ({commit}, data) => {
    commit(EDIT_QUESTION, data);
}