import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '100px', padding: '15px',  }}>
      <a className="navbar-brand" href="/">
        <img
          src="https://png.pngtree.com/png-clipart/20230301/ourmid/pngtree-bakery-logo-baker-illustration-png-image_6625246.png"
          alt=""
          style={{ width: '150px', height: '100px' }} // Adjust the width and height of your logo
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/" style={{ color: 'brown' }}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutPage" style={{ color: 'brown' }}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#MenuPage" style={{ color: 'brown' }}>Menu</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto"> {/* Align social media links to the right */}
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> {/* You can use Font Awesome or another icon library */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> {/* Example Twitter icon */}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> {/* Example Instagram icon */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
