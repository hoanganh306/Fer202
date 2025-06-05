import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Image } from 'react-bootstrap';

function Exercise5() {
  return (
    <div>

      {/* Header */}
      <Card style={{ backgroundColor: '#e58724' }} text="white" border="0"  className="rounded-0">
        <Card.Body className="text-center">
          <Container>
            <Image
              src="fptu.jpg"
              alt="FPT Education"
              fluid
              style={{ maxWidth: '300px' }}
            />
          </Container>
        </Card.Body>
      </Card>

      {/* Navbar */}
      <Navbar style={{ backgroundColor: '#e58724' }} variant="dark" className="justify-content-center">
        <Nav>
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link  href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main content */}
      <Container className="text-center my-4">
        <section id="about" className="mb-5">
          <h3><strong>About</strong></h3>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact">
          <h3><strong>Contact</strong></h3>
          <p>
            For any inquiries, please contact us at{' '}
            <a >example@example.com</a>.
          </p>
        </section>
      </Container>

      {/* Footer */}
      <Card bg="warning" text="dark" className="rounded-0">
        <Card.Body className="text-center py-2">
          <small>© 2023 Website. All rights reserved.</small>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Exercise5;
