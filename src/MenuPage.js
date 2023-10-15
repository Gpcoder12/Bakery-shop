import React from 'react';
import './MenuPage.css';

const MenuPage = () => {
  return (
    <div className="container">
      <h1>Menu</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="image-container">
            <img src="/images/apricot-tart.jpg" alt="Apricot Tart" className="img-thumbnail" />
          </div>
          Apricot Tart
        </li>
        <li className="list-group-item">
          <div className="image-container">
            <img src="/images/bagel.jpg" alt="Bagel" className="img-thumbnail" />
          </div>
          Bagel
        </li>
        <li className="list-group-item">
          <div className="image-container">
            <img src="/images/cheasea bun.jpg" alt="Chelsea Buns" className="img-thumbnail" />
          </div>
          Chelsea Buns
        </li>
        <li className="list-group-item">
          <div className="image-container">
            <img src="/images/crossiant.jpg" alt="Croissants" className="img-thumbnail" />
          </div>
          Croissants
        </li>
        <li className="list-group-item">
          <div className="image-container">
            <img src="/images/swiss roll.jpg" alt="Swiss Roll" className="img-thumbnail" />
          </div>
          Swiss Roll
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;

