import * as types from "../actions/types";

// import { AppState } from '../store';

const INITIAL_STATE = {
  questions: [],
  loading: false,
  questionsAnswered: [],
  score: 0,
  result: []
};

const amendChoices = (questions) => {
  //Random answer in array
  const getRandomizedChoices = ({ answer1, answer2, answer3, answer4 }) =>
    [answer1, answer2, answer3, answer4].sort(() => 0.5 - Math.random());

  // Return new value random choices of question
  return questions.map((question) => ({
    ...question,
    choices: getRandomizedChoices(question),
  }));
};

export const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.QUESTIONS_FETCH_REQUEST:
      return {
        ...state,
        loading: action.loading,
      };

    case types.QUESTIONS_FETCH_SUCCESS:
      return {
        ...state,
        questions: amendChoices(action.questions),
        loading: action.loading,
      };

    case types.ANSWER_SELECTED:
      const { questionIndex, answerIndex } = action.payload;
      return {
        ...state,
        questionsAnswered: {
          ...state.questionsAnswered,
          [questionIndex]: answerIndex,
        },
      };

    case types.GAME_RESET:
      return {
        ...INITIAL_STATE,
      };

    case types.SUBMIT_QUESTION:
      return {
       ...state,
       result: action.result,
       loading: action.loading,
      };

    default:
      return state;
  }
};

export default gameReducer;
