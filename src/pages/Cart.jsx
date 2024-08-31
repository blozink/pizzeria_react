import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import pizzas from '../assets/js/pizzas';

const Cart = () => {
  const [cart, setCart] = useState([
    { ...pizzas[0], quantity: 1 },
    { ...pizzas[1], quantity: 2 },
  ]);

  const handleAddPizza = (id) => {
    const newCart = cart.map(pizza => {
      if (pizza.id === id) {
        return { ...pizza, quantity: pizza.quantity + 1 };
      }
      return pizza;
    });
    setCart(newCart);
  };

  const handleReducePizza = (id) => {
    const newCart = cart
      .map(pizza => {
        if (pizza.id === id && pizza.quantity > 1) {
          return { ...pizza, quantity: pizza.quantity - 1 };
        }
        return pizza;
      })
      .filter(pizza => pizza.quantity > 0);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cart.map(pizza => (
          <Card key={pizza.id} style={{ width: '22rem', margin: '1rem' }}>
            <Card.Img variant="top" src={pizza.img} width={"100%"} />
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <Card.Title className='card-title'><strong>{pizza.name}</strong></Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                <Card.Text className='card-text'>🍕 {pizza.ingredients.join(', ')}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Text className='card-text'>Cantidad: {pizza.quantity}</Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Text className="price-text">
                    <strong>Precio: ${pizza.price.toLocaleString('es-ES')}</strong> 
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Text className="price-text">
                    <strong>Subtotal: ${(pizza.price * pizza.quantity).toLocaleString('es-ES')}</strong>
                  </Card.Text>
                </ListGroup.Item>
              </ListGroup>
              <div className="button-group">
                <Button variant="outline-danger" className="card-button" onClick={() => handleReducePizza(pizza.id)}>-</Button>
                <Button variant="outline-success" className="card-button" onClick={() => handleAddPizza(pizza.id)}>+</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3>Total de la compra: ${calculateTotal().toLocaleString('es-ES')}</h3>
        <Button variant="success" style={{ marginTop: '1rem' }}>Pagar</Button>
      </div>
    </div>
  );
};

export default Cart;
