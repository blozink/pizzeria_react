import React, { useState, useEffect, useContext } from 'react';
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error fetching pizzas:', error));
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onAdd={() => addToCart(pizza)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;


