/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      console.log('Current state:', state);
      console.log('Action:', action);
      const product = action.product;
      const existingItem = state.find((item) => item.id === product.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item,
        );
      }
      return [...state, { ...product, quantity: product.quantity }];
    }
    case 'REMOVE_FROM_CART':
      console.log('Removing item with ID:', action.id);
      return state.filter((item) => item.id !== action.id);

    case 'UPDATE_QUANTITY':
      console.log(
        'Updating quantity for ID:',
        action.id,
        'to:',
        action.quantity,
      );
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item,
      );

    case 'CLEAR_CART':
      console.log('Clearing cart');
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    console.log('Cart updated:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
