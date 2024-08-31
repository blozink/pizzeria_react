import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas/p001')
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) return <div>Cargando Pizza...</div>; 

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '100%' }}>
        <div className="d-flex">
          <Card.Img variant="left" src={pizza.img} style={{ width: '50%', height: 'auto' }} />
          <Card.Body>
            <Card.Title><strong>{pizza.name}</strong></Card.Title>
            <Card.Text>
              {pizza.desc}
            </Card.Text>
            <ListGroup variant="flush">
              {pizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>
                  <span role="img" aria-label="pizza">🍕</span> {ingredient}
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Title className="mt-3">
              <strong>Precio: <span style={{ color: 'green' }}>${pizza.price.toLocaleString('es-ES')}</span></strong>
            </Card.Title>
            <Button style={{width:'100%', marginTop:'10px'}} variant="outline-danger">Añadir 🛒</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Pizza;
