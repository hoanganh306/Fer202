import React from 'react';
import { Button } from 'react-bootstrap';

const Result = ({ score, total, onReplay }) => {
  return (
    <div className="text-center">
      <h3>Your Score: {score} / {total}</h3>
      <p>Thank you for playing!</p>
      <Button variant="success" className="mt-3 rounded-pill" onClick={onReplay}>
        Replay Quiz
      </Button>
    </div>
  );
};

export default Result;
