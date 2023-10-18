import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success"style={{ height: '100px', padding: '15px' }}>
      <a className="navbar-brand" href="/"> 
        <img src="data:image/jpeg;base64,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" alt="Your Logo" /> 
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
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutPage">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#MenuPage">Menu</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

