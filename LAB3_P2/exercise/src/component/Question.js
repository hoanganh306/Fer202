import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const Question = ({ question, options, onAnswer }) => {
    return (
        <>
            <h4>{question}</h4>
            <ListGroup className="mt-3">
                {options.map((opt, idx) => (
                    <ListGroup.Item key={idx}>
                        <Button variant="outline-primary" onClick={() => onAnswer(opt)}>
                            {opt}
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};

export default Question;
