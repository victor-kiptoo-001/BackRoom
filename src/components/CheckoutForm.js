import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CheckoutForm.css';

function CheckoutForm() {
  return (
    <form className="checkout-form">
      <h3>Customer Information</h3>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="254..." />
      <input type="text" placeholder="Table No." />
      <h3>Payment</h3>
      <select>
        <option>Pay</option>
        <option>Cash</option>
        <option>M-Pesa</option>
        <option>Tigo Pesa</option>
        <option>MTN</option>
      </select>
      <Link to="/receipt">
        <button type="submit">Confirm Order</button>
      </Link>
    </form>
  );
}

export default CheckoutForm;