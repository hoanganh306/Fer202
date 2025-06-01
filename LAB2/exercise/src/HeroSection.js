import React from 'react';
import './PizzaHouseWebsite.css';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url('/img/pizza1.jpg')` }}>
      <div className="hero-content">
        <h1>Neapolitan Pizza</h1>
        <p>If you are looking for a traditional Italian pizza, the Neapolitan is the best option!</p>
      </div>
      <button className="carousel-control carousel-control-prev">‹</button>
      <button className="carousel-control carousel-control-next">›</button>
    </section>
  );
};

export default HeroSection;