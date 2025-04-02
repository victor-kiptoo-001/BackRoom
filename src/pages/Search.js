import React, { useState } from 'react';
import '../styles/Search.css';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { popularItems, offerItems } from '../data/items';

function Search() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  // Combine all items for searching
  const allItems = [...popularItems, ...offerItems];

  // Filter items based on search term (name or category)
  const filteredItems = allItems.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatch = item.name.toLowerCase().includes(searchLower);
    const categoryMatch = item.category
      ? item.category.toLowerCase().includes(searchLower)
      : false;
    return nameMatch || categoryMatch;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="search">
      <h2>Search Items</h2>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search items"
        />
      </div>
      <div className="search-results">
        {filteredItems.length === 0 ? (
          <p className="no-results">No items found.</p>
        ) : (
          filteredItems.map((item, index) => (
            <div className="search-item" key={index}>
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
          ))
        )}
      </div>
    </div>
  );
}

export default Search;