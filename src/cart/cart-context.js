import React from 'react';

const initialCartState = {
  cartItems: [],
  updateCartItems: () => {},
  totalPrice: 0,
  clearCart: () => {},
};

export const CartContext = React.createContext(initialCartState);
