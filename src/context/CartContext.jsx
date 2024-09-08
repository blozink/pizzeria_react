import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const foundPizza = prevCart.find((p) => p.id === pizza.id);
      if (foundPizza) {
        return prevCart.map((p) =>
          p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === pizzaId && pizza.quantity > 1
            ? { ...pizza, quantity: pizza.quantity - 1 }
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

   const deleteFromCart = (pizzaId) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(pizza => pizza.id !== pizzaId);
      return [...updatedCart];  
    });
  };
  

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
