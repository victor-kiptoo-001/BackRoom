import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Search from './pages/Search';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import Receipt from './pages/Receipt';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;