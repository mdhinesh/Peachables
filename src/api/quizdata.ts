import axios from 'axios';

const quizApi = axios.create({
  baseURL: 'https://api-quiz-production.up.railway.app/',
});

export const fetchQuizData = async (quizname: string) => {
//   console.log(quizname);
  const response = await quizApi.get(`/quizdata/${quizname}`);
//   console.log(response.data);
  return response.data;
};

export default quizApi;
