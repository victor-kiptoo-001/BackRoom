import React from 'react';
import '../styles/OrderItem.css';

function OrderItem({ name, price, quantity = 1, image }) {
  return (
    <div className="order-item">
      <img src={image} alt={name} className="order-image" />
      <div className="order-info">
        <h4>{name}</h4>
        <p>Kshs {price}</p>
      </div>
      <div className="quantity-controls">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
    </div>
  );
}

export default OrderItem;