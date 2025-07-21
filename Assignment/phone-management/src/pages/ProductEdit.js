import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../api";
import { Form, Button, Card, Row, Col, Alert, Spinner, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((res) => {
      setFormData(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.currentPrice || !formData.image) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    await updateProduct(id, formData);
    navigate(`/products/${id}`);
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
      <Spinner animation="border" variant="primary" />
      <span className="ms-2">Loading phone info...</span>
    </div>
  );
  if (!formData) return <div className="loader">No phone found.</div>;

  return (
    <Container className="edit-form-container mt-4">
      <Card>
        <Card.Header as="h4" className="text-center">Edit Phone</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="edit-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Phone Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
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
                    value={formData.image}
                    placeholder="Paste image URL (https://...)"
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
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" onClick={() => navigate(`/products/${id}`)}>Cancel</Button>
              <Button variant="success" type="submit">Save Changes</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductEdit;
