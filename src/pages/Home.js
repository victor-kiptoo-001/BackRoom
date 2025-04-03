import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaShoppingCart, FaSearch, FaBars, FaGlassMartiniAlt, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { popularItems, offerItems } from '../data/items';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const { addToCart, getCartCount } = useCart();

  // Refs for scrolling
  const popularItemsRef = useRef(null);
  const offerItemsRef = useRef(null);
  const barItemsRef = useRef(null);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollItems = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="The Backroom Logo" className="header-logo" />
          <div className="logo-text">
            <div className="name">
              <span className="name-line1">The</span>
              <span className="name-line2">BACKROOM</span>
            </div>
            <p className="quote">Exclusive Party House</p>
          </div>
        </div>
        <nav className="icons">
          <Link to="/order" className="cart-icon" aria-label="Cart">
            <FaShoppingCart />
            <span className="cart-count">{getCartCount()}</span>
          </Link>
          <button className="menu-btn" aria-label="Open menu">
            <FaBars />
          </button>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <div className="notification-area">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            className="custom-toast-container"
            limit={1}
          />
        </div>
        <h2>
          WELCOME <FaGlassMartiniAlt aria-hidden="true" />
        </h2>
        <div className="category-filters">
          <button className="active">All</button>
          <button onClick={() => scrollToSection('categories-section')}>
            Categories
          </button>
          <button onClick={() => scrollToSection('bar-section')}>Bar</button>
          <button onClick={() => scrollToSection('food-section')}>Food</button>
        </div>
        <div className="menu-search">
          <Link to="/menu" className="menu-btn">
            View our Menu
          </Link>
          <Link to="/search" className="search-btn" aria-label="Search menu">
            <FaSearch />
          </Link>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="popular-items">
        <h3>Popular Items</h3>
        <div className="items-container">
          <button
            className="scroll-btn left"
            onClick={() => scrollItems(popularItemsRef, 'left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <div className="items-grid" ref={popularItemsRef}>
            {popularItems.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.image} alt={`${item.name} bottle`} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">Shs {item.price}</p>
                  <span className="availability">
                    {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <button
                  className="add-to-cart"
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => handleAddToCart(item)}
                  disabled={item.stock === 0}
                >
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
          <button
            className="scroll-btn right"
            onClick={() => scrollItems(popularItemsRef, 'right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* On Offer Section */}
      <section className="offers">
        <h3>On Offer</h3>
        <div className="items-container">
          <button
            className="scroll-btn left"
            onClick={() => scrollItems(offerItemsRef, 'left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <div className="items-grid" ref={offerItemsRef}>
            {offerItems.map((item, index) => (
              <div className="offer-item" key={index}>
                <img src={item.image} alt={`${item.name} bottle`} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">Shs {item.price}</p>
                  <span className="availability">
                    {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <button
                  className="add-to-cart"
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => handleAddToCart(item)}
                  disabled={item.stock === 0}
                >
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
          <button
            className="scroll-btn right"
            onClick={() => scrollItems(offerItemsRef, 'right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories-section" className="categories">
        <h3>Categories</h3>
        <p className="section-placeholder">
          Explore our wide range of drinks and food items.
        </p>
      </section>

      {/* Bar Section */}
      <section id="bar-section" className="bar">
        <h3>Bar</h3>
        <div className="items-container">
          <button
            className="scroll-btn left"
            onClick={() => scrollItems(barItemsRef, 'left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
          <div className="items-grid" ref={barItemsRef}>
            {[...popularItems, ...offerItems].map((item, index) => (
              <div className="item" key={index}>
                <img src={item.image} alt={`${item.name} bottle`} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price">Shs {item.price}</p>
                  <span className="availability">
                    {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <button
                  className="add-to-cart"
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => handleAddToCart(item)}
                  disabled={item.stock === 0}
                >
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
          <button
            className="scroll-btn right"
            onClick={() => scrollItems(barItemsRef, 'right')}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Food Section */}
      <section id="food-section" className="food">
        <h3>Food</h3>
        <p className="section-placeholder">
          Coming soon! Stay tuned for our delicious food menu.
        </p>
      </section>
    </div>
  );
}

export default Home;