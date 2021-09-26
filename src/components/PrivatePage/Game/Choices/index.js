import React from 'react';
import '../Choices/style.scss';
import { selectAnswer } from '../../../../redux/actions/quiz';
import { useSelector, useDispatch } from "react-redux";



export default function Choices ({ question, questionIndex }) {
  const dispatch = useDispatch()
  const { questionsAnswered } = useSelector((state) => state.game);
  

  
  return(
    <div className="choices">
    {question.choices.map((answer, answerIndex) => (
      <div
        key={answerIndex}
        className={`${ answer === questionsAnswered[questionIndex] ? 'selected' : ''}`}
        onClick={() => {
          dispatch(selectAnswer(questionIndex, answer ));
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: answer }} /> 
      </div>
    ))}
 
  </div>
  )
 
};
