// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYH1DCv42gcYgfQGPjtB_YDMDeZPtza3v6S7siNa6ns5k9lQO6jSjlxvEiX6qNIR9nw&s"  className="logo-icon" />
          </Link>
        </div>
        <h1 className="site-title">ALI STORE</h1>

        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </button>

        <nav className={`navigation ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/products" onClick={toggleMenu}>Shop</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                <FaShoppingCart className="nav-icon" /> Cart
              </Link>
            </li>
            <li className="nav-dropdown">
              <span onClick={toggleDropdown} className="dropdown-toggle">
                <FaUser className="nav-icon" /> Account
              </span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
                  <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
                  <li><Link to="/orders" onClick={toggleMenu}>Orders</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
