import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const formatCurrency = (amount) => {
  return amount.toLocaleString("es-ES");
};

const Navegacion = () => {
  const { calculateTotal } = useContext(CartContext);
  const total = calculateTotal();
  const token = false;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ width: "100%" }} variant="dark" bg="dark"  data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Button variant="outline-light" style={{ margin: "5px" }}>
                🍕 Home
              </Button>
            </Link>
            {token ? (
              <>
                <Link to="/profile">
                  <Button variant="outline-light" style={{ margin: "5px" }}>
                    🔓 Profile
                  </Button>
                </Link>
                <Button variant="outline-light" style={{ margin: "5px" }}>
                  🔒 Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline-light" style={{ margin: "5px" }}>
                    🔐 Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline-light" style={{ margin: "5px" }}>
                    🔐 Register
                  </Button>
                </Link>
              </>
            )}
          </Nav>
          <Nav>
            <Link to="/cart">
              <Button variant="outline-info" style={{ margin: "5px" }}>
                🛒 Total: ${formatCurrency(total)}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegacion;
