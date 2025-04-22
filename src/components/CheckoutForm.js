import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CheckoutForm.css';
import { toast } from 'react-toastify';

function CheckoutForm() {
  const { cart, checkout } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tableNo: '',
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToPOS = async (orderData) => {
    try {
      const response = await fetch('https://api.yourposvendor.com/orders', { // Replace with your POS endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY' // Replace with your POS API key
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error(`POS API responded with status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('POS Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast.error('Cart is empty!', { position: 'top-right', autoClose: 3000 });
      return;
    }
    if (!formData.name || !formData.phone || !formData.paymentMethod) {
      toast.error('Please fill all required fields!', { position: 'top-right', autoClose: 3000 });
      return;
    }

    const subTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const vat = subTotal * 0.05;
    const serviceFee = 310;
    const total = subTotal + vat + serviceFee;

    const orderData = {
      order: {
        items: cart.map((item) => ({
          item_id: item.id || item.name,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })),
        total,
        payment_method: formData.paymentMethod,
        customer: {
          name: formData.name,
          phone: formData.phone,
          table_no: formData.tableNo
        }
      }
    };

    try {
      await sendToPOS(orderData);
      checkout();
      toast.success('Order sent to POS successfully!', { position: 'top-right', autoClose: 3000 });
      navigate('/receipt');
    } catch (error) {
      toast.error('Failed to process order. Please try again.', { position: 'top-right', autoClose: 3000 });
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h3>Customer Information</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="254..."
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="tableNo"
        placeholder="Table No."
        value={formData.tableNo}
        onChange={handleInputChange}
      />
      <h3>Payment</h3>
      <select
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleInputChange}
        required
      >
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