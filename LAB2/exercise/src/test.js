import React, { useState } from 'react';
import './PizzaHouseWebsite.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PizzaHouseWebsite = () => {

  return (
  <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pizza House</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet" />
        {/* <style dangerouslySetInnerHTML={{__html:"\n.hero-section {\nbackground: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/pizza1.jpg');\n            background-size: cover;\n            background-position: center;\n            height: 70vh;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: white;\n            text-align: center;\n            position: relative;\n        }\n        \n        .hero-content h1 {\n            font-size: 4rem;\n            font-weight: bold;\n            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);\n            margin-bottom: 20px;\n        }\n        \n        .hero-content p {\n            font-size: 1.3rem;\n            max-width: 600px;\n            margin: 0 auto;\n        }\n        \n        .navbar-brand {\n            font-size: 2rem;\n            font-weight: bold;\n        }\n        \n        .menu-section {\n            background-color: #2c2c2c;\n            color: white;\n            padding: 80px 0;\n        }\n        \n        .pizza-card {\n            transition: transform 0.3s ease;\n            height: 100%;\n        }\n        \n        .pizza-card:hover {\n            transform: translateY(-10px);\n        }\n        \n        .pizza-image {\n            height: 250px;\n            object-fit: cover;\n            width: 100%;\n        }\n        \n        .price-original {\n            text-decoration: line-through;\n            color: #888;\n        }\n        \n        .price-sale {\n            color: #ffc107;\n            font-weight: bold;\n        }\n        \n        .booking-section {\n            background-color: #2c2c2c;\n            color: white;\n            padding: 80px 0;\n        }\n        \n        .carousel-control {\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            background: rgba(0,0,0,0.5);\n            border: none;\n            color: white;\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            font-size: 1.5rem;\n        }\n        \n        .carousel-control:hover {\n            background: rgba(0,0,0,0.8);\n            color: white;\n        }\n        \n        .carousel-control-prev {\n            left: 50px;\n        }\n        \n        .carousel-control-next {\n            right: 50px;\n        }\n    " }} /> */}
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Pizza House</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search..." />
                <button className="btn btn-danger">🔍</button>
              </div>
            </div>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="hero-section" style={{ backgroundImage: `url('/img/pizza1.jpg')` }}>
          <div className="hero-content">
            <h1>Neapolitan Pizza</h1>
            <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
          </div>
          <button className="carousel-control carousel-control-prev">‹</button>
          <button className="carousel-control carousel-control-next">›</button>
        </section>
        {/* Menu Section */}
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
        {/* Booking Section */}
        <section className="booking-section">
          <div className="container">
            <h2 className="display-4 text-center mb-5 fw-bold">Book Your Table</h2>
            <div className="row g-3">
              <div className="col-md-4">
                <input type="text" className="form-control form-control-lg" placeholder="Your Name *" />
              </div>
              <div className="col-md-4">
                <input type="email" className="form-control form-control-lg" placeholder="Your Email *" />
              </div>
              <div className="col-md-4">
                <select className="form-select form-select-lg">
                  <option selected>Select a Service</option>
                  <option value="dine-in">Dine In</option>
                  <option value="takeaway">Takeaway</option>
                  <option value="delivery">Delivery</option>
                  <option value="catering">Catering</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <textarea className="form-control form-control-lg" rows={5} placeholder="Please write your comment" defaultValue={""} />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <button className="btn btn-warning btn-lg text-dark fw-bold px-4">Send Message</button>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default PizzaHouseWebsite