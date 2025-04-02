import React from 'react';
import '../styles/Checkout.css';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;