import React from 'react';

function OrderItem({ name, price, quantity, image }) {
  return (
    <div className="order-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>Kshs {price}</p>
        <p>Qty: {quantity}</p>
      </div>
    </div>
  );
}

export default OrderItem;