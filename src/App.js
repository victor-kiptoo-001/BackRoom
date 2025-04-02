import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer
import Home from './pages/Home';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/';

  return (
    <CartProvider>
      <div className="App">
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
        <Footer /> {/* Add Footer here */}
      </div>
    </CartProvider>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

