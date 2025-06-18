import { useState } from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

export default function DragDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggingItem === null) return;

    const draggedItem = items[draggingItem];
    const newItems = [...items];
    newItems.splice(draggingItem, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
    setDraggingItem(null);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>
          <h2>Drag and Drop List</h2>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item
                key={item}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
                style={{ 
                  cursor: 'move',
                  opacity: draggingItem === index ? 0.5 : 1
                }}
                className={draggingItem === index ? 'bg-light' : ''}
              >
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}