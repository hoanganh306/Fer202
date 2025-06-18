import { useState } from "react";
import { Container, Card, Form, Button, ListGroup, Alert } from "react-bootstrap";

export default function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const items = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", 
    "Fig", "Grape", "Honeydew", "Kiwi", "Lemon", 
    "Mango", "Orange", "Papaya", "Quince", "Raspberry"
  ];
  
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h1>Search Filter</h1>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fruits..."
            />
          </Form.Group>

          <Alert variant="info" className="mb-3">
            {searchQuery ? 
              `Found ${filteredItems.length} result(s) for "${searchQuery}"` : 
              `Showing all ${items.length} items`
            }
          </Alert>

          {filteredItems.length === 0 ? (
            <Alert variant="warning">
              <Alert.Heading>No items found</Alert.Heading>
              <p>Try a different search term</p>
            </Alert>
          ) : (
            <ListGroup className="mb-3">
              {filteredItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}

          {searchQuery && (
            <Button 
              variant="secondary" 
              onClick={() => setSearchQuery("")}
            >
              Clear search
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}