import React from 'react';
import './PizzaHouseWebsite.css';

const MenuSection = () => {
  return (
    <section className="menu-section">
      <div className="container">
        <h2 className="display-4 text-center mb-5 fw-bold">Our Menu</h2>
        <div className="row g-4">
          {/* Margherita Pizza */}
          <div className="col-lg-3 col-md-6">
            <div className="card pizza-card">
              <div className="position-relative">
                <img src="/img/menu1.jpg" alt="Margherita Pizza" className="pizza-image" />
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">SALE</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Margherita Pizza</h5>
                <p className="card-text">
                  <span className="price-original me-2">$40.00</span>
                  <span className="price-sale">$24.00</span>
                </p>
                <button className="btn btn-dark w-100">Buy</button>
              </div>
            </div>
          </div>
          {/* Mushroom Pizza */}
          <div className="col-lg-3 col-md-6">
            <div className="card pizza-card">
              <img src="/img/menu2.jpg" alt="Mushroom Pizza" className="pizza-image" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Mushroom Pizza</h5>
                <p className="card-text fw-bold">$25.00</p>
                <button className="btn btn-dark w-100">Buy</button>
              </div>
            </div>
          </div>
          {/* Hawaiian Pizza */}
          <div className="col-lg-3 col-md-6">
            <div className="card pizza-card">
              <div className="position-relative">
                <img src="/img/menu3.jpg" alt="Hawaiian Pizza" className="pizza-image" />
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">NEW</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Hawaiian Pizza</h5>
                <p className="card-text fw-bold">$30.00</p>
                <button className="btn btn-dark w-100">Buy</button>
              </div>
            </div>
          </div>
          {/* Pesto Pizza */}
          <div className="col-lg-3 col-md-6">
            <div className="card pizza-card">
              <div className="position-relative">
                <img src="/img/menu4.jpg" alt="Pesto Pizza" className="pizza-image" />
                <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">SALE</span>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Pesto Pizza</h5>
                <p className="card-text">
                  <span className="price-original me-2">$50.00</span>
                  <span className="price-sale">$35.00</span>
                </p>
                <button className="btn btn-dark w-100">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;