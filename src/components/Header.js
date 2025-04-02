import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBell, FaBars, FaArrowLeft } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <button onClick={() => navigate(-1)} className="back-btn" aria-label="Go back">
          <FaArrowLeft />
        </button>
        <Link to="/">
          <div className="header-logo">
            <img src="/assets/logo.png" alt="The Backroom Logo" className="logo" />
            <div className="header-title">
              <span className="title-line1">The</span>
              <span className="title-line2">BACKROOM</span>
              <span className="title-line3">Exclusive Party House</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="header-icons">
        <Link to="/search">
          <FaSearch className="icon" />
        </Link>
        <Link to="/order">
          <div className="cart-wrapper">
            <FaShoppingCart className="icon" />
            <span className="cart-count">3</span>
          </div>
        </Link>
        <FaBell className="icon" />
        <FaBars className="icon" />
      </div>
    </header>
  );
}

export default Header;