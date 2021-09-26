import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Choices from "../Choices";
import "../Questions/style.scss";
import { submitQuestions } from "../../../../redux/actions/quiz";
import { history } from "../../../../helpers/history";

export function Questions({ questions }, props) {
  const dispatch = useDispatch();

  const { questionsAnswered } = useSelector((state) => state.game);
  const [index, setIndex] = useState(0);

  const question = questions && questions[index];

  if (!question) return null;
  return (
    <div className="questions">
      <div className="question-title">Question {index + 1}: {question.question}</div>

      <Choices question={question} questionIndex={question.id} />

      <div className="btn-container">
        {/* show previous button if we are not on first element */}
        { index > 0 && <button className='button' onClick={() => setIndex(index - 1)}>prev</button>}

        {/* hide next button if we are at the last element */}
        {index < questions.length - 1 && (
          <button className='button' onClick={() => setIndex(index + 1)}>next</button>
        )}
      </div>

      <div
        className="btn-submit"
        onClick={() => {
          dispatch(submitQuestions(questionsAnswered)).then((response) => {
            if (response === 1) history.push("/mainquiz/summary");
          });
        }}
      >
        Submit
      </div>
    </div>
  );
}

export default Questions;
