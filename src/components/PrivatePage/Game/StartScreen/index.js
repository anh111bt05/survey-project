import React from 'react';
import { Button } from '../Button';
import './styles.scss';

export const StartScreen = () => {
  return (
    <div className="StartScreen">
      <h1>Quiz game</h1>

      <Button to="/game">Start</Button>
    </div>
  );
};
