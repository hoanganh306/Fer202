import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function Title({ text }) {
  return <h3 className="fw-bold  m-0">{text}</h3>;
}

function Description({ text }) {
  return <p className="text-secondary m-0">{text}</p>;
}


function SimpleCard({ item }) {
  return (
    <Card
      style={{ border: '2px solid blue', width: '800px' }}
      className="p-2"
    >
      <Row style={{ height: '100px' }}>
        <Col xs={4} className="border-end border-warning">
          <Card.Img 
            src="../fpt.png" 
            alt="Card image"
            style={{height: '100px', objectFit: 'cover'}}
          />
        </Col>
        <Col xs={8} className="ps-3">
          <Title text={item.title} />
          <Description text={item.description} />
        </Col>
      </Row>
    </Card>
  );
}

export default function Exercise4() {
  const item = {
    title: 'Hoang Anh - FPT Danang',
    description: 'Mobile: 0982060446'
  };

  return (
    <Container className="p-5">
      <SimpleCard item={item} />
    </Container>
  );
}
