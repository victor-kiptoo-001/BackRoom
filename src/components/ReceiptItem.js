import React from 'react';
import '../styles/ReceiptItem.css';

function ReceiptItem({ name, price, quantity }) {
  return (
    <div className="receipt-item">
      <p>{name}</p>
      <p>Kshs {price} x {quantity}</p>
    </div>
  );
}

export default ReceiptItem;