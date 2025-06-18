import { useState } from "react";
import { Container, Card, Form, Alert } from "react-bootstrap";

export default function ControlledInputField() {
  const [inputText, setInputText] = useState("");

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h1>Controlled Input Field</h1>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type something..."
            />
          </Form.Group>
          
          <Alert variant="info">
            <strong>You typed:</strong> {inputText || "(nothing yet)"}
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
}