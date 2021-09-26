import axios from "axios";
import authHeader from "./auth-header";

const apiUrl  = process.env.REACT_APP_BACKEND_URL;

const fetchQuiz = async () => {
  const response = await axios.get(apiUrl + 'questions', { headers: authHeader() });
  return response
};

const submitQuiz = async(questionAnswers) => {
  const response = await axios.post(apiUrl + 'questions/submit',questionAnswers, { headers: authHeader() });
  return response
}

export default {fetchQuiz, submitQuiz}