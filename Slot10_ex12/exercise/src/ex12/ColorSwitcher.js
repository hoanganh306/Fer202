import { useState } from "react";
import { Container, Card, Form, Alert, Badge } from "react-bootstrap";

export default function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState("white");

  const colors = [
    { value: "white", label: "White", textColor: "dark" },
    { value: "red", label: "Red", textColor: "light" },
    { value: "blue", label: "Blue", textColor: "light" },
    { value: "green", label: "Green", textColor: "light" },
    { value: "yellow", label: "Yellow", textColor: "dark" },
    { value: "purple", label: "Purple", textColor: "light" },
    { value: "orange", label: "Orange", textColor: "light" }
  ];

  const getCurrentColor = () => colors.find(color => color.value === selectedColor);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h1>Color Switcher</h1>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Choose a color:</Form.Label>
            <Form.Select 
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {colors.map(color => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Card 
            className="mb-3"
            style={{ backgroundColor: selectedColor }}
          >
            <Card.Body className="text-center">
              <Card.Title className={`text-${getCurrentColor()?.textColor}`}>
                Background Color
              </Card.Title>
              <Card.Text className={`text-${getCurrentColor()?.textColor}`}>
                {selectedColor}
              </Card.Text>
            </Card.Body>
          </Card>

          <Alert variant="info">
            Selected: <Badge bg="primary">{selectedColor}</Badge>
          </Alert>
        </Card.Body>
      </Card>
    </Container>
  );
}