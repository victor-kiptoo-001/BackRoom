import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaQuoteLeft } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-quote">
          <FaQuoteLeft className="quote-icon" />
          <p>
            "Welcome All"
          </p>
        </div>
        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://facebook.com/thebackroom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/thebackroom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/thebackroom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 The Backroom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;