import React from 'react';

function CheckoutForm() {
  return (
    <form className="checkout-form">
      <h3>Customer Information</h3>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Phone" />
      <h3>Payment</h3>
      <select>
        <option>M-Pesa</option>
        <option>Cash</option>
        <option>Card</option>
      </select>
      <button type="submit">Confirm Order</button>
    </form>
  );
}

export default CheckoutForm;