import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, calculateTotal } = useContext(CartContext);
  const { token } = useContext(UserContext);

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
                <Button variant="outline-danger" className="card-button" onClick={() => removeFromCart(pizza.id)}>-</Button>
                <Button variant="outline-success" className="card-button" onClick={() => addToCart(pizza)}>+</Button>
                <Button variant="danger" className="card-button" onClick={() => deleteFromCart(pizza.id)}>Eliminar</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3>Total de la compra: ${calculateTotal().toLocaleString('es-ES')}</h3>
        <Button 
          variant="success" 
          style={{ marginTop: '1rem' }} 
          disabled={!token}
        >
          {token ? 'Pagar' : 'Inicia sesión para pagar'}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
