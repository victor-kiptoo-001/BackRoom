import React from 'react';

function ProductCard({ name, price, image, status }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Kshs {price}</p>
      {status && <p className="status">{status}</p>}
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;