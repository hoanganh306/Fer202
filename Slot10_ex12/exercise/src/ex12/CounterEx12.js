import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h1>Counter Component</h1>
        </Card.Header>
        <Card.Body className="text-center">
          <h2 className="mb-3">{count}</h2>
          <Button 
            variant="primary" 
            onClick={() => setCount(count + 1)}
          >
            Increment
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}