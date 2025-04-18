import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import Login from './pages/Login';
import splashImage from './assets/images/splash-image.png'; // Import the image

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/' && location.pathname !== '/login';
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        {showSplash ? (
          <div className="splash-screen">
            <img src={splashImage} alt="Splash" className="splash-image" />
          </div>
        ) : (
          <div className="App">
            {showHeader && <Header />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/search" element={<Search />} />
              <Route path="/order" element={<Order />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/receipt" element={<Receipt />} />
              <Route path="/login" element={<Login splashImage={splashImage} />} />
            </Routes>
            <Footer />
          </div>
        )}
      </CartProvider>
    </AuthProvider>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}