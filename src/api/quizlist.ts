import axios from 'axios';

const quizApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchQuizList = async () => {
  const response = await quizApi.get('/quizlist');
  return response.data;
};

export default quizApi;
