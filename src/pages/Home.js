import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaShoppingCart, FaSearch, FaBars, FaGlassMartiniAlt } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>The BACKROOM</h1>
          <p>Exclusive Party House</p>
        </div>
        <div className="icons">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">3</span>
          </Link>
          <button className="menu-btn">
            <FaBars />
          </button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome">
        <h2>WELCOME <FaGlassMartiniAlt /></h2>
        <div className="category-filters">
          <button className="active">All</button>
          <button>Categories</button>
          <button>Bar</button>
          <button>Food</button>
        </div>
        <div className="menu-search">
          <Link to="/menu" className="menu-btn">View our Menu</Link>
          <button className="search-btn"><FaSearch /></button>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="popular-items">
        <h3>Popular Items</h3>
        <div className="items-grid">
          <div className="item">
            <img src="/assets/images/jack-daniels.png" alt="Jack Daniels" />
            <p>Jack Daniels - <span className="price">Shs 4000</span></p>
            <span className="availability">Available</span>
          </div>
          <div className="item">
            <img src="/assets/images/red-label.png" alt="Red Label" />
            <p>Red Label - <span className="price">Shs 4000</span></p>
            <span className="availability">Available</span>
          </div>
        </div>
      </section>

      {/* On Offer Section */}
      <section className="offers">
        <h3>On Offer</h3>
        <div className="offers-grid">
          <div className="offer-item">
            <img src="/assets/images/captain-morgan.png" alt="Captain Morgan" />
            <p>Captain Morgan - <span className="price">Shs 4000</span></p>
            <span className="availability">Available</span>
          </div>
          <div className="offer-item">
            <img src="/assets/images/captain-morgan.png" alt="Captain Morgan" />
            <p>Captain Morgan - <span className="price">Shs 4000</span></p>
            <span className="availability">Available</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
