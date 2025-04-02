import React from 'react';
import '../styles/Search.css';
import ProductCard from '../components/ProductCard';

function Search() {
  const products = [
    { name: 'Red Label', price: 4000, image: '/assets/images/red-label.png' },
    { name: 'Jack Daniels', price: 4000, image: '/assets/images/jack-daniels.png' },
  ];

  return (
    <div className="search">
      <h2>Frequently Searched</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  );
}

export default Search;