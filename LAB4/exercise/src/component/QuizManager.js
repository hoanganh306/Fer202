import React, { useState, useContext } from 'react';
import { QuizContext } from './QuizContext';
import QuestionForm from './QuestionForm';
import QuizApp from './QuizApp';
import { Container, Button } from 'react-bootstrap';

const QuizManager = () => {
  const { questions } = useContext(QuizContext);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <Container className="mt-5">
      {!isQuizStarted ? (
        <>
          <QuestionForm />
          {questions.length > 0 && (
            <div className="text-center mt-3">
              <Button onClick={() => setIsQuizStarted(true)}>Start Quiz</Button>
            </div>
          )}
        </>
      ) : (
        <QuizApp onReplay={() => setIsQuizStarted(false)} />
      )}
    </Container>
  );
};

export default QuizManager;
