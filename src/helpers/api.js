import axios from 'axios';

export const instance = axios.create({
  baseURL: '/api/',
});

export const createQuestion = data => (
  instance.post('/questions', data).then(res => res.data)
);

export const deleteQuestion = id => (
  instance.delete(`/questions/${id}`, ).then(res => res.data)
);
