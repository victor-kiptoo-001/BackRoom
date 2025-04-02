import React from 'react';
import '../styles/Checkout.css';
import CheckoutForm from '../components/CheckoutForm';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total: Kshs 8830</p>
      <CheckoutForm />
      <Link to="/receipt">
        <button>Confirm Order</button>
      </Link>
    </div>
  );
}

export default Checkout;