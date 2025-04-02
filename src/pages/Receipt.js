import React from 'react';
import '../styles/Receipt.css';
import ReceiptItem from '../components/ReceiptItem';

function Receipt() {
  const items = [
    { name: 'Captain Morgan', price: 3200, quantity: 1 },
    { name: 'Jack Daniels', price: 4000, quantity: 1 },
  ];

  return (
    <div className="receipt">
      <div className="receipt-header">
        <img src="/assets/logo.png" alt="The Backroom Logo" className="receipt-logo" />
        <p className="thank-you">"Thank you for choosing us"</p>
      </div>
      <div className="receipt-details">
        <h3>Receipt</h3>
        <div className="receipt-items">
          {items.map((item, index) => (
            <ReceiptItem
              key={index}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="receipt-summary">
          <p>Sub Total: Kshs 7200</p>
          <p>VAT 5%: Kshs 360</p>
          <p>Services: Kshs 310</p>
          <p><strong>Total: Kshs 8830</strong></p>
        </div>
      </div>
      <div className="receipt-footer">
        <p>Order placed Payment received Service on its way</p>
        <p>Service will be with you in no time. Thank you for your patience.</p>
        <p className="order-number">IPORDR045_003</p>
      </div>
    </div>
  );
}

export default Receipt;