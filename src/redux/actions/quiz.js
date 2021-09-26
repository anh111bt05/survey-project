import QuizService from "../services/question.service";
import * as types from "./types";



export const fetchQuestions = () => (dispatch) => {
  dispatch({ type: types.QUESTIONS_FETCH_REQUEST, loading: true });
  return QuizService.fetchQuiz()
    .then((response) => {
      dispatch({
        type: types.QUESTIONS_FETCH_SUCCESS,
        questions: response.data.results,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
};

export const selectAnswer = (questionIndex, answerIndex) => (
  {
  type: types.ANSWER_SELECTED,
  payload: {
    questionIndex,
    answerIndex,
  },
});

export const submitQuestions = (questionAnswers) => (dispatch) => {
  dispatch({ type: types.SUBMIT_QUESTION, loading: true });
  return QuizService.submitQuiz(questionAnswers)
    .then((response) => {
      dispatch({
        type: types.SUBMIT_QUESTION,
        result: response.data,
        loading: false,
      });
      return 1
    })
    .catch((error) => console.log(error));
};

export const resetGame = () => ({
  type: types.GAME_RESET
});
