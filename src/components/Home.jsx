import React from 'react';
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from '../assets/js/pizzas';

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
};

export default Home
