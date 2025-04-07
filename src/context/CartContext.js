import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        toast.success(`${item.name} quantity increased!`, { position: "top-right", autoClose: 3000 });
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      toast.success(`${item.name} added to cart!`, { position: "top-right", autoClose: 3000 });
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      toast.success(`${itemName} removed from cart!`, { position: "top-right", autoClose: 3000 });
      return prevCart.filter((item) => item.name !== itemName);
    });
  };

  const updateQuantity = (itemName, change) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.name === itemName);
      if (!item) return prevCart;
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        toast.success(`${itemName} removed from cart!`, { position: "top-right", autoClose: 3000 });
        return prevCart.filter((i) => i.name !== itemName);
      }
      toast.success(
        change > 0 ? `${itemName} quantity increased!` : `${itemName} quantity decreased!`,
        { position: "top-right", autoClose: 3000 }
      );
      return prevCart.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const checkout = () => {
    setPurchasedItems([...cart]);
    setCart([]);
    toast.success('Checkout successful!', { position: "top-right", autoClose: 3000 });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getCartCount, checkout, purchasedItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);