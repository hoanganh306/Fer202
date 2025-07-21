import React, { useState, useContext } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { QuizContext } from './QuizContext';

const QuestionForm = () => {
  const { questions, setQuestions } = useContext(QuizContext);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddQuestion = () => {
    if (!question || answers.some(ans => !ans) || !correctAnswer) return;
    setQuestions([...questions, { question, answers, correctAnswer }]);
    setQuestion('');
    setAnswers(['', '', '']);
    setCorrectAnswer('');
  };

  return (
    <Card className="p-3 mb-4">
      <h5>Add New Question</h5>
      <Form>
        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control value={question} onChange={(e) => setQuestion(e.target.value)} />
        </Form.Group>
        {answers.map((ans, i) => (
          <Form.Group key={i} className="mt-2">
            <Form.Label>Answer {i + 1}</Form.Label>
            <Form.Control
              value={ans}
              onChange={(e) => {
                const newAns = [...answers];
                newAns[i] = e.target.value;
                setAnswers(newAns);
              }}
            />
          </Form.Group>
        ))}
        <Form.Group className="mt-2">
          <Form.Label>Correct Answer</Form.Label>
          <Form.Control value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
        </Form.Group>
        <Button className="mt-3" onClick={handleAddQuestion}>Add Question</Button>
      </Form>
    </Card>
  );
};

export default QuestionForm;
