import React from 'react';
import './PizzaHouseWebsite.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import BookingSection from './BookingSection';

const PizzaHouseWebsite = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pizza House</title>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet" />
      <Navigation />
      <HeroSection />
      <MenuSection />
      <BookingSection />
    </div>
  );
};

export default PizzaHouseWebsite;