import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '90vh', textAlign: 'center' }}>
      <h1 className="display-1 fw-bold text-danger">404👽</h1>
      <h2 className="mb-4">Oops! La Pagina No Existe</h2>
      <p className="lead mb-4">
       ¡No te pierdas!
      </p>
      <Link to="/">
        <Button variant="dark" size="lg">
          Vuelve al Home Aquí
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
