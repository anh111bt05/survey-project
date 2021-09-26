import React from "react";
import './style.scss'


function HeaderBar({ questionsTotal, numOfQuestionsAnswered }) {

  return (
    <header className="header-bar">
      <div className="header-bar-container">
        <div className="header-bar-item">
          <div className="progress">
          Answered: 
            <span className="score-value">
              {numOfQuestionsAnswered}/{questionsTotal}
            </span>
          </div>
        </div>

        <div className="header-bar-item">
          <h1 className="title">Quiz game</h1>
        </div>

      
      </div>
    </header>
  );
}

export default HeaderBar;
