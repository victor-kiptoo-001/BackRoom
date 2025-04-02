import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify'; // Import toast

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Start with an empty cart

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        toast.success(`${item.name} quantity increased!`, {
          position: "top-right",
          autoClose: 3000,
        });
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      toast.success(`${item.name} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
      });
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      toast.success(`${itemName} removed from cart!`, {
        position: "top-right",
        autoClose: 3000,
      });
      return prevCart.filter((item) => item.name !== itemName);
    });
  };

  // Update item quantity
  const updateQuantity = (itemName, change) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.name === itemName);
      if (!item) return prevCart;

      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        toast.success(`${itemName} removed from cart!`, {
          position: "top-right",
          autoClose: 3000,
        });
        return prevCart.filter((i) => i.name !== itemName);
      }

      toast.success(
        change > 0
          ? `${itemName} quantity increased!`
          : `${itemName} quantity decreased!`,
        {
          position: "top-right",
          autoClose: 3000,
        }
      );

      return prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Get total cart count
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);