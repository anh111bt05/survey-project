import React from 'react';
import '../SummaryScreen/style.scss';
import { Button } from '../../../Button';
import {  useSelector } from "react-redux";

export default function SummaryScreen  ()  {
  const {result} = useSelector((state) => state.game);
  
  const filterResult  = (result).map(response => response.result);

  const count = filterResult.filter(Boolean).length;

  return (
    <div className="SummaryScreen">
    <h2 className="headline">
      Congratulations!{' '}
      <span role="img" aria-label="celebration-emoji">
        🎉
      </span>
    </h2>
    <p className="score-display">
      Your score is: <span>{count}</span>
    </p>
    <p>
      <Button to="/mainquiz">Home</Button>
    </p>
  </div>
  );
};
