import React from 'react';

const MenuPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Bakery Menu</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="item1.jpg" className="card-img-top" alt="Item 1" />
            <div className="card-body">
              <h5 className="card-title">BAGEL</h5>
              <p className="card-text">Delicious freshly baked bread.</p>
              <p className="card-text">$5.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <img src="item2.jpg" className="card-img-top" alt="Item 2" />
            <div className="card-body">
              <h5 className="card-title">Chealsea bun</h5>
              <p className="card-text">Custom cakes for all occasions.</p>
              <p className="card-text">$29.99</p>
            </div>
          </div>
        </div>
        {/* Add more menu items as needed */}
      </div>
    </div>
  );
};

export default MenuPage;
