import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Adjust path
import '../styles/CheckoutForm.css';
import { toast } from 'react-toastify'; // Ensure toast is imported

function CheckoutForm() {
  const { cart, checkout } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (cart.length === 0) {
      toast.error('Cart is empty!', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
    checkout(); // Save cart to purchasedItems and clear cart
    navigate('/receipt'); // Navigate to receipt page
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h3>Customer Information</h3>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="254..." />
      <input type="text" placeholder="Table No." />
      <h3>Payment</h3>
      <select>
        <option value="">Select Payment Method</option>
        <option value="cash">Cash</option>
        <option value="mpesa">M-Pesa</option>
        <option value="tigopesa">Tigo Pesa</option>
        <option value="mtn">MTN</option>
      </select>
      <button type="submit">Confirm Order</button>
    </form>
  );
}

export default CheckoutForm;