import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { FaShoppingCart, FaBars, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function Header() {
  const navigate = useNavigate();
  const { getCartCount } = useCart();

  return (
    <header className="header">
      <div className="header-left">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <FaArrowLeft />
        </button>
        <div className="header-logo">
          <img src="/assets/logo.png" alt="The Backroom Logo" className="logo" />
          <div className="header-title">
            <div className="title-line1">The</div>
            <div className="title-line2">BACKROOM</div>
            <div className="title-line3">Exclusive Party House</div>
          </div>
        </div>
      </div>
      <nav className="header-icons">
        <Link to="/order" className="cart-wrapper icon" aria-label="Cart">
          <FaShoppingCart />
          <span className="cart-count">{getCartCount()}</span>
        </Link>
        <button className="icon" aria-label="Open menu">
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Header;