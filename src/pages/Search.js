import React from 'react';
import '../styles/Search.css';
import ProductCard from '../components/ProductCard';

function Search() {
  const categories = ['All', 'Cocktails', 'Bar', 'Food'];
  const products = [
    { name: 'Red Label', price: 4000, image: '/assets/images/red-label.png' },
    { name: 'Jack Daniels', price: 4000, image: '/assets/images/jack-daniels.png' },
    { name: 'Ugali Beef', price: 1200, image: '/assets/images/ugali-beef.png' },
  ];

  return (
    <div className="search">
      <div className="categories">
        {categories.map((category, index) => (
          <button key={index} className={index === 0 ? 'active' : ''}>
            {category}
          </button>
        ))}
      </div>
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