import { useState } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";

export default function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h1>Toggle Visibility</h1>
        </Card.Header>
        <Card.Body>
          <Button 
            variant={isVisible ? "warning" : "success"}
            onClick={() => setIsVisible(!isVisible)}
            className="mb-3"
          >
            {isVisible ? "Hide" : "Show"}
          </Button>
          
          {isVisible && (
            <Alert variant="success">
              🎉 This text is now visible! You successfully toggled the visibility.
            </Alert>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}