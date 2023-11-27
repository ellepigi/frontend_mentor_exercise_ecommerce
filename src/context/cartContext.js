import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [number, setNumber] = useState(0);

  const addToNumber = () => {
       setNumber((prevNumber) => prevNumber + 1)
  }

  const removeFromNumber = () => {
    if(number !== 0){
      setNumber((prevNumber) => prevNumber - 1)
    }
  }

  const addToCart = () => {
    setCart((prevCart) => prevCart + number);
  };

  // const removeFromCart = () => {
  //   if (cart !== 0 ){
  //         setCart((prevCart) => prevCart - 1)
  //   }
  // }

  return (
    <CartContext.Provider value={{ cart, addToCart, number, addToNumber, removeFromNumber }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext deve essere utilizzato all\'interno di un CartProvider');
  }
  return context;
};

export { CartProvider, useCartContext };
