import React from 'react';

const initialCartState = {
  cartItems: [],
  updateCartItems: () => {},
  totalBasketPrice: 0,
  clearCart: () => {},
};

export const CartContext = React.createContext(initialCartState);
