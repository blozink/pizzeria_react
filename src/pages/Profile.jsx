import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Profile = () => {
  const userEmail = "hola@desafiolatam.com";

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '85vh', textAlign: 'center' }}>
      <h1 className="mb-4">Perfil</h1>
      <p className="lead mb-4">Email: {userEmail}</p>
      <Button variant="danger" size="lg">Cerrar Sesión</Button>
    </Container>
  );
};

export default Profile;
