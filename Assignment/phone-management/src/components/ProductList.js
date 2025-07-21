import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setSearchTerm } from '../store/slices/productSlice';
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, Form, Alert, Spinner, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductList() {
  const dispatch = useDispatch();
  const { displayedProducts, searchTerm, isLoading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Container className="product-list mt-4">
      <div className="product-list-header mb-4">
        <h2>Phone List</h2>
      </div>
      <Form className="mb-4">
        <Form.Group controlId="searchPhone">
          <Form.Control
            type="text"
            placeholder="Search phones by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>
      </Form>
      {error && <Alert variant="danger">{error}</Alert>}
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
          <Spinner animation="border" variant="primary" />
          <span className="ms-2">Loading phones...</span>
        </div>
      ) : displayedProducts.length === 0 ? (
        <Alert variant="info">No phones found matching your search.</Alert>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {displayedProducts.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={product.image.startsWith('http') ? product.image : `/Images/${product.image}`}
                  alt={product.name}
                  style={{ height: 200, objectFit: 'contain' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-truncate" title={product.description} style={{ minHeight: 48 }}>
                    {product.description}
                  </Card.Text>
                  <div className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">{product.price} đ</span>
                    <span className="fw-bold text-danger">{product.currentPrice} đ</span>
                  </div>
                  <div className="mt-auto">
                    <Button as={Link} to={`/products/${product.id}`} variant="primary" className="w-100">
                      View Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ProductList;
