import React from 'react';

const MenuPage = () => {
  return (
    <div id="MenuPage" className="container mt-5">
      <h1 className="text-center"style={{ color: 'brown',font:'italic' }}>Our Bakery Menu</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <img src="https://www.davidovichbakery.com/wp/wp-content/uploads/2018/01/Davidovich-Bakery-13-web.jpg" className="card-img-top" alt="Item 1" />
            <div className="card-body"style={{ color: 'brown' }}>
              <h5 className="card-title">BAGEL</h5>
              <p className="card-text">These freshly baked, golden-brown delights are perfectly crispy</p>
              <p className="card-text">R12.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <img src="https://media.istockphoto.com/id/1066842278/photo/danish-cinnamon-rolls-with-a-glas-of-milk-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=DmeSOXV96GFsB97WXcC2wQfrfkHeoScNPT1bs2_lu2o=" className="card-img-top" alt="Item 2" />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">Chealsea bun</h5>
              <p className="card-text">"Experience the irresistible delight of our Chelsea Buns, freshly baked to perfection"</p>
              <p className="card-text">R12.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <img src="https://img.freepik.com/free-photo/delicious-glazed-doughnuts-arrangement_23-2150674022.jpg?size=626&ext=jpg&ga=GA1.2.783724358.1697279446&semt=ais" className="card-img-top" alt="Item 3" />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">Doughnuts</h5>
              <p className="card-text">Delight in the irresistible indulgence of our delectable doughnuts.</p>
              <p className="card-text">R22.99</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <img src="https://www.onceuponachef.com/images/2019/04/Lemon-Pound-Cake-10-scaled.jpg" className="card-img-top" alt="Item 4" />
            <div className="card-body" style={{ color: 'brown' }}>
              <h5 className="card-title">Lemon Cake</h5>
              <p className="card-text">Bursting with the tangy goodness of freshly squeezed lemons, this moist and tender cake is a citrus-lover's dream come true.</p>
              <p className="card-text">R23.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
