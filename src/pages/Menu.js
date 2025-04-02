import React from 'react';
import '../styles/Menu.css';
import ProductCard from '../components/ProductCard';

function Menu() {
  const products = [
    { name: 'Captain Morgan', price: 4000, image: '/assets/images/captain-morgan.png' },
    { name: 'Jack Daniels', price: 4000, image: '/assets/images/jack-daniels.png' },
    { name: 'Ugali Beef', price: 1200, image: '/assets/images/ugali-beef.png' },
  ];

  return (
    <div className="menu">
      <h2>Popular Items</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
    </div>
  );
}

export default Menu;