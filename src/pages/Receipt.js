import React from 'react';
import '../styles/Receipt.css';
import ReceiptItem from '../components/ReceiptItem';

function Receipt() {
  const items = [
    { name: 'Captain Morgan', price: 4000, quantity: 1 },
    { name: 'Jack Daniels', price: 4000, quantity: 1 },
  ];

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <div className="receipt-list">
        {items.map((item, index) => (
          <ReceiptItem key={index} name={item.name} price={item.price} quantity={item.quantity} />
        ))}
      </div>
      <div className="receipt-summary">
        <p>Sub Total: Kshs 8000</p>
        <p>VAT 5%: Kshs 400</p>
        <p>Services: Kshs 310</p>
        <p><strong>Total: Kshs 8830</strong></p>
      </div>
    </div>
  );
}

export default Receipt;