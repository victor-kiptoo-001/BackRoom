import React from 'react';
import '../styles/Menu.css';
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { popularItems, offerItems } from '../data/items';

function Menu() {
  const { addToCart } = useCart();

  const allItems = [...popularItems, ...offerItems];

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {allItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={`${item.name} bottle`} />
            <p>
              {item.name} - <span className="price">Shs {item.price}</span>
            </p>
            <span className="availability">Available</span>
            <button
              className="add-to-cart"
              aria-label={`Add ${item.name} to cart`}
              onClick={() => handleAddToCart(item)}
            >
              <FaPlus />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;