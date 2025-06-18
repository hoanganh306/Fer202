import { useState } from "react";
import { Container, Card, Form, Button, ListGroup, Alert, Row, Col, Badge } from "react-bootstrap";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h1>Todo List</h1>
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new todo..."
              />
            </Col>
            <Col xs="auto">
              <Button variant="primary" onClick={addTodo}>
                Add
              </Button>
            </Col>
          </Row>

          {todos.length === 0 ? (
            <Alert variant="info">
              No todos yet. Add one above!
            </Alert>
          ) : (
            <>
              <ListGroup className="mb-3">
                {todos.map(todo => (
                  <ListGroup.Item 
                    key={todo.id} 
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>{todo.text}</span>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              
              <Alert variant="success">
                Total todos: <Badge bg="primary">{todos.length}</Badge>
              </Alert>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}