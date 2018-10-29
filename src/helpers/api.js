import axios from 'axios';

export const instance = axios.create({
    baseURL: '/api/',
});

export const createTest = data => (
    instance.post('/test', data).then(res => location.replace('/course/' +res.data.section.course.id))
);

export const getSections = courseId => instance.get(`/sections?course=${courseId}`).then(({data}) => data);

export const getTest = testId => instance.get(`/test/${testId}`);

export const getQuestion = testId => instance.get(`/questions?test=${testId}`).then(({data}) => data);

export const editTest = (data, testId) => (
    instance.put(`/test/${testId}`, data.data).then(res => location.replace('/course/' +res.data.section.course.id))
);