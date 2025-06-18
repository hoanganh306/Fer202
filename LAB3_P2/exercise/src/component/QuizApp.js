import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import { Container, Card } from 'react-bootstrap';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: '2 + 2 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
    },
];

const QuizApp = () => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (answer) => {
        if (answer === questions[current].correctAnswer) {
            setScore(score + 1);
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrent(0);
        setScore(0);
        setShowResult(false);
    };

    return (
        <Container className="mt-5">
            <Card className="p-4">
                {showResult ? (
                    <Result score={score} total={questions.length} onReplay={resetQuiz} />
                ) : (
                    <Question
                        question={questions[current].question}
                        options={questions[current].options}
                        onAnswer={handleAnswer}
                    />
                )}
            </Card>
        </Container>
    );
};

export default QuizApp;
