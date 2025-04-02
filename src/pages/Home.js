import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaShoppingCart, FaSearch, FaBars, FaGlassMartiniAlt, FaPlus } from 'react-icons/fa';

function Home() {
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
          <Link to="/order" className="cart-icon" aria-label="Cart with 3 items">
            <FaShoppingCart />
            <span className="cart-count">3</span>
          </Link>
          <button className="menu-btn" aria-label="Open menu">
            <FaBars />
          </button>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <h2>
          WELCOME <FaGlassMartiniAlt aria-hidden="true" />
        </h2>
        <div className="category-filters">
          <button className="active">All</button>
          <button>Categories</button>
          <button>Bar</button>
          <button>Food</button>
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
        <div className="items-grid">
          <div className="item">
            <img src="/assets/images/jack-daniels.png" alt="Jack Daniels bottle" />
            <p>
              Jack Daniels - <span className="price">Shs 4000</span>
            </p>
            <span className="availability">Available</span>
            <button className="add-to-cart" aria-label="Add Jack Daniels to cart">
              <FaPlus />
            </button>
          </div>
          <div className="item">
            <img src="/assets/images/red-label.png" alt="Red Label bottle" />
            <p>
              Red Label - <span className="price">Shs 4000</span>
            </p>
            <span className="availability">Available</span>
            <button className="add-to-cart" aria-label="Add Red Label to cart">
              <FaPlus />
            </button>
          </div>
        </div>
      </section>

      {/* On Offer Section */}
      <section className="offers">
        <h3>On Offer</h3>
        <div className="offers-grid">
          <div className="offer-item">
            <img src="/assets/images/captain-morgan.png" alt="Captain Morgan bottle" />
            <p>
              Captain Morgan - <span className="price">Shs 4000</span>
            </p>
            <span className="availability">Available</span>
            <button className="add-to-cart" aria-label="Add Captain Morgan to cart">
              <FaPlus />
            </button>
          </div>
          <div className="offer-item">
            <img src="/assets/images/captain-morgan.png" alt="Captain Morgan bottle" />
            <p>
              Captain Morgan - <span className="price">Shs 4000</span>
            </p>
            <span className="availability">Available</span>
            <button className="add-to-cart" aria-label="Add Captain Morgan to cart">
              <FaPlus />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;