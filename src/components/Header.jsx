import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaEnvelope, FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItemCount = 99; // Giả lập số lượng sản phẩm trong giỏ hàng

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="BookStore Logo" />
          <span className="logo-text">BookStore</span>
        </Link>

        <div className="search-bar">
          <input 
            type="text" 
            className="search-input"
            placeholder="Tìm kiếm..." 
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>

        <div className="nav-links">
          <Link to="/cart" className="nav-link">
            <div className="icon-container">
              <FaShoppingCart />
              <span className="cart-count">{cartItemCount}+</span>
            </div>
          </Link>
          
          <Link to="/favorites" className="nav-link">
            <FaHeart />
          </Link>
          
          <Link to="/messages" className="nav-link">
            <FaEnvelope />
          </Link>
          
          <Link to={isLoggedIn ? "/profile" : "/login"} className="nav-link">
            <FaUser />
          </Link>

          {isLoggedIn && (
            <button className="logout-button">
              <span>Đăng xuất</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;