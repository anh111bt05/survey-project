import React, { useEffect } from "react";

import { resetGame, fetchQuestions } from "../../../../redux/actions/quiz";

import { useSelector, useDispatch } from "react-redux";

import { LoadingSpinner } from "../../../Loading";

import HeaderBar from "../HeaderBar";

import { Questions } from "../Questions";

function GameScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(resetGame());
  }, [dispatch]);

  const { questions, loading, questionsAnswered } = useSelector((state) => state.game);

  const count = Object.keys(questionsAnswered).length;



  return (
    <div className="GameScreen">
    <HeaderBar
      questionsTotal={questions.length}
      numOfQuestionsAnswered={count}
    />

    {loading ? (
      <LoadingSpinner />
    ) : (
        <Questions
          questions={questions}
          questionsAnswered={questionsAnswered}
        />

    )}
  </div>
);
}


export default GameScreen;
