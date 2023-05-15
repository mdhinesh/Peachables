import axios from 'axios';

const quizApi = axios.create({
  baseURL: 'https://api-quiz-production.up.railway.app/',
});

export const fetchQuizList = async () => {
  const response = await quizApi.get('/quizlist');
  return response.data;
};

export default quizApi;
