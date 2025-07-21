import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api";
import { Card, Button, Container, Row, Col, Spinner } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
      <Spinner animation="border" variant="primary" />
      <span className="ms-2">Loading phone details...</span>
    </div>
  );
  if (!product) return <div className="loader">No phone found.</div>;

  return (
    <Container className="product-detail mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Row className="g-0">
              <Col md={5} className="d-flex align-items-center justify-content-center">
                <Card.Img
                  src={product.image.startsWith('http') ? product.image : `/Images/${product.image}`}
                  alt={product.name}
                  style={{ maxHeight: 320, objectFit: 'cover', width: '100%' }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title as="h2">{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="mb-3">
                    <span className="text-muted text-decoration-line-through me-2">{product.price} đ</span>
                    <span className="fw-bold text-danger">{product.currentPrice} đ</span>
                  </div>
                  <Button as={Link} to="/" variant="secondary">
                    ← Back to Phone List
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
