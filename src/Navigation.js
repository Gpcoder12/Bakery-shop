import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
