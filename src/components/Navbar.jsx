import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const formatCurrency = (amount) => {
  return amount.toLocaleString('es-ES');
};

const Navegacion = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ width: '100%' }} variant="dark" bg='dark' data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-light" style={{ margin: '5px' }}>🍕 Home</Button>
            {token ? (
              <>
                <Button variant="outline-light" style={{ margin: '5px' }}>🔓 Profile</Button>
                <Button variant="outline-light" style={{ margin: '5px' }}>🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" style={{ margin: '5px' }}>🔐 Login</Button>
                <Button variant="outline-light" style={{ margin: '5px' }}>
                  <a href="./components/Register.jsx"></a>
                  
                  🔐 Register</Button>
              </>
            )}
          </Nav>
          <Nav>
            <Button variant="outline-info" style={{ margin: '5px' }}>🛒 Total: ${formatCurrency(total)}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;