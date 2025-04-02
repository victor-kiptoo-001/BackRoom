import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
 const [cart, setCart] = useState([]); // Start with an empty cart

 // Add item to cart
 const addToCart = (item) => {
 setCart((prevCart) => {
 const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
 if (existingItem) {
 return prevCart.map((cartItem) =>
 cartItem.name === item.name
 ? { ...cartItem, quantity: cartItem.quantity + 1 }
 : cartItem
 );
 }
 return [...prevCart, { ...item, quantity: 1 }];
 });
 };

 // Remove item from cart
 const removeFromCart = (itemName) => {
 setCart((prevCart) => prevCart.filter((item) => item.name !== itemName));
 };

 // Update item quantity
 const updateQuantity = (itemName, change) => {
 setCart((prevCart) => {
 const updatedCart = prevCart
 .map((item) =>
 item.name === itemName
 ? { ...item, quantity: item.quantity + change }
 : item
 )
 .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0
 return updatedCart;
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