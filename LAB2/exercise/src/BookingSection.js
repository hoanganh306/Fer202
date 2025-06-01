import React from 'react';
import './PizzaHouseWebsite.css';

const BookingSection = () => {
  return (
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
  );
};

export default BookingSection;