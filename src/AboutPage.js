import React from 'react';


function YourComponent() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Sweet Harmony</h1>
          <p className="lead">Founded by Gopolang, a passionate baker with a rich culinary background, our bakery is a haven for artisanal treats. With a deep-seated love for the art of baking, Gopolang brings years of experience to every creation. Located in the heart of [Your Location], our bakery is a warm, welcoming space where the heavenly aroma of freshly baked goods greets you at the door. From buttery croissants to intricately decorated cakes, each item is a testament to our commitment to quality and flavor. We believe in making every moment special with our delectable offerings. Come savor the taste of passion and tradition at Sweet Harmony.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learm more</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;


