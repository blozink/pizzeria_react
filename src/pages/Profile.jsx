import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '85vh', textAlign: 'center' }}>
      <h1 className="mb-4">Perfil</h1>
      <p className="lead mb-4">Email: {user?.email || 'Correo no disponible'}</p>
      <Button variant="danger" size="lg" onClick={handleLogout}>Cerrar Sesión</Button>
    </Container>
  );
};

export default Profile;
