import React, { useState, useEffect, useContext } from 'react';
import { QuizContext } from './QuizContext';
import Question from './Question';
import Result from './Result';
import { Card } from 'react-bootstrap';

const QuizApp = ({ onReplay }) => {
  const { questions, selectedAnswer, setSelectedAnswer } = useContext(QuizContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (selectedAnswer !== null) {
      if (selectedAnswer === questions[currentIndex].correctAnswer) {
        setScore(score + 1);
      }
      setTimeout(() => {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setShowResult(true);
        }
        setSelectedAnswer(null);
      }, 500);
    }
  }, [selectedAnswer]);

  return (
    <Card className="p-4">
      {showResult ? (
        <Result score={score} total={questions.length} onReplay={onReplay} />
      ) : (
        <Question data={questions[currentIndex]} />
      )}
    </Card>
  );
};

export default QuizApp;
