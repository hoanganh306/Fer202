"use client"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Navbar, Nav, Container, Button } from "react-bootstrap"

function Header({ user, onLogout }) {
  return (
    <Navbar
      expand="md"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e9ecef",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        marginBottom: 0,
        padding: "12px 0",
      }}
      variant="light"
      className="main-header"
    >
      <Container fluid style={{ maxWidth: "1200px" }}>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "#212529",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          Phone Store
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "6px",
            padding: "6px 10px",
          }}
        />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: "40px" }}>
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: "#6c757d",
                fontWeight: 500,
                fontSize: "15px",
                padding: "8px 16px",
                borderRadius: "6px",
                transition: "color 0.2s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#212529"
                e.target.style.backgroundColor = "#f8f9fa"
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#6c757d"
                e.target.style.backgroundColor = "transparent"
              }}
            >
              Home
            </Nav.Link>

            {user && (
              <>
                <Nav.Link
                  as={Link}
                  to="/products/add"
                  style={{
                    color: "#6c757d",
                    fontWeight: 500,
                    fontSize: "15px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    transition: "color 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#212529"
                    e.target.style.backgroundColor = "#f8f9fa"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#6c757d"
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  Add Phone
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/manage-products"
                  style={{
                    color: "#6c757d",
                    fontWeight: 500,
                    fontSize: "15px",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    transition: "color 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#212529"
                    e.target.style.backgroundColor = "#f8f9fa"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#6c757d"
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  Manage Phones
                </Nav.Link>
              </>
            )}
          </Nav>

          {user && (
            <div className="d-flex align-items-center ms-auto" style={{ gap: "16px" }}>
              <span
                style={{
                  color: "#495057",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {user.username}
              </span>

              <Button
                variant="outline-secondary"
                size="sm"
                onClick={onLogout}
                style={{
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "6px 16px",
                  borderRadius: "6px",
                  border: "1px solid #dee2e6",
                  color: "#6c757d",
                  backgroundColor: "transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8f9fa"
                  e.target.style.borderColor = "#adb5bd"
                  e.target.style.color = "#495057"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.borderColor = "#dee2e6"
                  e.target.style.color = "#6c757d"
                }}
              >
                Logout
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
}

export default Header
