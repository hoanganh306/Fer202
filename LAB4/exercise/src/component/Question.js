import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import { Button, ListGroup } from 'react-bootstrap';

const Question = ({ data }) => {
  const { setSelectedAnswer } = useContext(QuizContext);

  return (
    <>
      <h4>{data.question}</h4>
      <ListGroup className="mt-3">
        {data.answers.map((ans, idx) => (
          <ListGroup.Item key={idx} className="border-0 px-0">
            <Button
              variant="outline-primary"
              className="w-100 text-start py-2 rounded-pill"
              onClick={() => setSelectedAnswer(ans)}
            >
              {ans}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Question;
