import React from 'react';

const CarProfileDisplay = ({ car }) => {
  return (
    <div className="car-profile">
      <h2>{car.brand}</h2>
      <p>ID: {car.id}</p>
      <p>Production Date: {car.productionDate}</p>
      <p>License Plate: {car.licensePlate}</p>
    </div>
  );
};

export default CarProfileDisplay;
