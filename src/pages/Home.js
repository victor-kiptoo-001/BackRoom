import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { FaShoppingCart, FaSearch, FaBars, FaGlassMartiniAlt, FaPlus } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Import useCart

function Home() {
 const { addToCart, getCartCount } = useCart(); // Access cart context

 // Define items with their details
 const popularItems = [
 { name: 'Jack Daniels', price: 4000, image: '/assets/images/jack-daniels.png' },
 { name: 'Red Label', price: 4000, image: '/assets/images/red-label.png' },
 ];

 const offerItems = [
 { name: 'Captain Morgan', price: 4000, image: '/assets/images/captain-morgan.png' },
 { name: 'Captain Morgan', price: 4000, image: '/assets/images/captain-morgan.png' },
 ];

 // Function to handle adding an item to the cart
 const handleAddToCart = (item) => {
 addToCart(item);
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
 {popularItems.map((item, index) => (
 <div className="item" key={index}>
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
 </section>

 {/* On Offer Section */}
 <section className="offers">
 <h3>On Offer</h3>
 <div className="offers-grid">
 {offerItems.map((item, index) => (
 <div className="offer-item" key={index}>
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
 </section>
 </div>
 );
}

export default Home;