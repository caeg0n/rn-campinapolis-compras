import React from 'react';
import { CartContext } from './cart-context';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const updateCartItems = React.useCallback((items, total) => {
    setCartItems(items);
    setTotalPrice(total);
  }, []);

  const clearCart = React.useCallback(() => {
    setCartItems([]);
    setTotalPrice(0);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateCartItems,
        totalPrice,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
