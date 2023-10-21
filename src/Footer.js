import React from 'react';
import'./footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-success">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} Sweet Harmony Bakery</p>
          </div>
          <div className="col-md-6 text-right">
            <p>Contact: gops@sweetharmonybakery.com</p>
          </div>
          <small>copyright sweetharmonybakery 2023</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
