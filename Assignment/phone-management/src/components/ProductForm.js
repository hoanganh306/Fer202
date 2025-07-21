import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { createProduct } from "../api";
import PropTypes from 'prop-types';

function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currentPrice: "",
    image: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.currentPrice || !formData.image) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    await createProduct(formData);
    onAdd();
    setFormData({
      name: "",
      description: "",
      price: "",
      currentPrice: "",
      image: "",
    });
  };

  return (
    <Card className="mb-4">
      <Card.Header as="h4" className="text-center">Add New Phone</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Phone Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter phone name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Original Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Original price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="currentPrice">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control
                  type="number"
                  name="currentPrice"
                  placeholder="Sale price"
                  value={formData.currentPrice}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Paste image URL (https://...)"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              placeholder="Phone description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="d-grid">
            <Button variant="success" type="submit">Add Phone</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

ProductForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default ProductForm;
