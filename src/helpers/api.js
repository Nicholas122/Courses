import axios from 'axios';

export const instance = axios.create({
	baseURL: '/api/',
});

export const createTest = data => (
	instance.post('/test', data).then(res => res.data)
	);

export const getSections = courseId => instance.get(`/sections?course=${courseId}`).then(({ data }) => data);

