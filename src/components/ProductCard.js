import React from 'react';
import '../styles/ProductCard.css';
import { FaPlus } from 'react-icons/fa';

function ProductCard({ name, price, image, availability = 'Available' }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p>Kshs {price}</p>
        <span className={`availability ${availability.toLowerCase()}`}>{availability}</span>
      </div>
      <button className="add-to-cart" aria-label={`Add ${name} to cart`}>
        <FaPlus />
      </button>
    </div>
  );
}

export default ProductCard;