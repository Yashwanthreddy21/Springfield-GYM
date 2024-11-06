// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {!isAuthenticated ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li>
                    <Link to="/membership-plans" style={{ color: '#fff', textDecoration: 'none' }}>Membership Plans</Link>
                </li>
            </>
          ) : (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
