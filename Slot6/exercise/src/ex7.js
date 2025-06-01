import React from 'react';

const Ex7 = () => {
  const carImage = "/image/innova.png";

  return (
    <div className="container mt-4">
      <h4><strong>Cards Columns</strong></h4>
      <div className="row g-3">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card bg-primary text-white text-center">
            <img src={carImage} className="card-img-top p-3" alt="Car" />
            <div className="card-body bg-primary text-dark ">
              <p className="card-text ">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card bg-warning text-dark text-center">
            <img src={carImage} className="card-img-top p-3" alt="Car" />
            <div className="card-body bg-warning text-dark ">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card bg-danger text-white text-center">
            <img src={carImage} className="card-img-top p-3" alt="Car" />
            <div className="card-body bg-danger text-dark">
              <p className="card-text">Some text inside the first card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ex7;
