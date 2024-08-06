import React from 'react';
import headerImage from '../assets/img/Header.jpg';

function Header() {
  return (
    <div className="header-container">
      <img src={headerImage} alt="Header" className="header-image" />
      <div className="header-text">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
}

export default Header;

