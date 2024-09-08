import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CardPizza = ({ name, price, ingredients, img, onAdd }) => {
  return (
    <Card style={{ width: '22rem', margin: '1rem' }}>
      <Card.Img src={img} width={"100%"} />
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <Card.Title className='card-title'><strong>{name}</strong></Card.Title>
          </ListGroup.Item>
          <ListGroup.Item>
            Ingredientes:
            <Card.Text className='card-text'>🍕 {ingredients.join(', ')}</Card.Text>
          </ListGroup.Item>
          <ListGroup.Item>        
            <Card.Text className="price-text">
              <strong>Precio: ${price.toLocaleString('es-ES')}</strong>
            </Card.Text>
          </ListGroup.Item>
        </ListGroup>

        <div className="button-group">
          <Button variant="outline-dark" className="card-button">Ver Más 👀</Button>
          <Button variant="dark" className="card-button" onClick={onAdd}>Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
