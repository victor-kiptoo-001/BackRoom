import React from 'react';
import '../styles/Receipt.css';
import ReceiptItem from '../components/ReceiptItem';
import { QRCodeCanvas } from 'qrcode.react';
import { useCart } from '../context/CartContext';

function Receipt() {
  const { purchasedItems } = useCart();

  const generateReceiptNumber = () => {
    const prefix = 'IPORDR';
    const randomNum = Math.floor(100 + Math.random() * 900);
    const timestamp = Date.now().toString().slice(-3);
    return `${prefix}${timestamp}_${randomNum}`;
  };

  const receiptNumber = generateReceiptNumber();

  const subTotal = purchasedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subTotal * 0.05;
  const serviceFee = 310;
  const total = subTotal + vat + serviceFee;

  const qrData = `Receipt: ${receiptNumber}\nTotal: Kshs ${total}`;

  return (
    <div className="receipt">
      <div className="receipt-header">
        <img src="/assets/logo.png" alt="The Backroom Logo" className="receipt-logo" />
        <p className="thank-you">"Thank you for choosing us"</p>
      </div>
      <div className="receipt-details">
        <h3>Receipt</h3>
        <div className="receipt-items">
          {purchasedItems.length > 0 ? (
            purchasedItems.map((item, index) => (
              <ReceiptItem
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>No items purchased.</p>
          )}
        </div>
        <div className="receipt-summary">
          <p>Sub Total: Kshs {subTotal.toLocaleString()}</p>
          <p>VAT 5%: Kshs {vat.toLocaleString()}</p>
          <p>Services: Kshs {serviceFee.toLocaleString()}</p>
          <p><strong>Total: Kshs {total.toLocaleString()}</strong></p>
        </div>
      </div>
      <div className="receipt-footer">
        <div className="qr-code">
          <QRCodeCanvas value={qrData} size={120} />
        </div>
        <p>Order placed Payment received Service on its way</p>
        <p>Service will be with you in no time. Thank you for your patience.</p>
        <p className="order-number">{receiptNumber}</p>
      </div>
    </div>
  );
}

export default Receipt;