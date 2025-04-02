import React from 'react';
import '../styles/Order.css';
import OrderItem from '../components/OrderItem';
import { Link } from 'react-router-dom';

function Order() {
  const items = [
    { name: 'Captain Morgan', price: 4000, quantity: 1, image: '/assets/images/captain-morgan.png' },
    { name: 'Jack Daniels', price: 4000, quantity: 1, image: '/assets/images/jack-daniels.png' },
  ];

  return (
    <div className="order">
      <h2>My Order</h2>
      <div className="order-list">
        {items.map((item, index) => (
          <OrderItem key={index} name={item.name} price={item.price} quantity={item.quantity} image={item.image} />
        ))}
      </div>
      <div className="order-summary">
        <p>Sub Total: Kshs 8000</p>
        <p>VAT 5%: Kshs 400</p>
        <p>Services: Kshs 310</p>
        <p><strong>Total: Kshs 8830</strong></p>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Order;