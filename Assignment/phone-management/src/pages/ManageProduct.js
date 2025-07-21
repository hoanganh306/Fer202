import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Alert, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getProducts, deleteProduct } from '../api';
import PropTypes from 'prop-types';

function ManageProduct() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await getProducts();
      setProducts(res.data);
      setError("");
    } catch (err) {
      setError("Unable to load phones");
    }
    setLoading(false);
  };

  const handleEdit = (id) => {
    navigate(`/products/${id}/edit`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this phone?')) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (err) {
        setError("Unable to delete phone");
      }
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Manage Phones</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
          <Spinner animation="border" variant="primary" />
          <span className="ms-2">Loading phones...</span>
        </div>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="product-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Original Price</th>
                <th>Sale Price</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td className="description-cell">{product.description}</td>
                  <td className="price-cell">{product.price} đ</td>
                  <td className="price-cell">{product.currentPrice} đ</td>
                  <td>
                    <img src={product.image.startsWith('http') ? product.image : `/Images/${product.image}`}
                      alt={product.name} style={{ width: 60, height: 60, objectFit: 'cover' }} />
                  </td>
                  <td className="action-cell">
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handleDelete(product.id)}
                      className="action-button delete-btn"
                    >
                      Delete
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={() => handleEdit(product.id)}
                      className="action-button edit-btn"
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}

export default ManageProduct; 