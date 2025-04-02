import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>The Backroom</h1>
      </Link>
      <div className="header-icons">
        <span>🔔</span>
        <span>🛒</span>
      </div>
    </header>
  );
}

export default Header;