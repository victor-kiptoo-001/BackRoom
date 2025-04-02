import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Order.css';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function Order() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="order">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">Shs {item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.name, -1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(item.name)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total: Shs {totalPrice}</p>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;