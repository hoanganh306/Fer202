import React from 'react';
import { Button } from 'react-bootstrap';

const Result = ({ score, total, onReplay }) => {
    return (
        <div className="text-center">
            <h3>Your Score: {score} / {total}</h3>
            <Button variant="success" onClick={onReplay} className="mt-3">
                Replay
            </Button>
        </div>
    );
};

export default Result;
