import axios from 'axios';

const quizApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchQuizData = async (quizname: string) => {
//   console.log(quizname);
  const response = await quizApi.get(`/quizdata/${quizname}`);
//   console.log(response.data);
  return response.data;
};

export default quizApi;
