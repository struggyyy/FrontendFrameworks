import React from 'react';
import RatingBar from './RatingBar';

const CarProfile = ({ car, dispatch }) => {
  const handleRate = () => {
    const newRating = car.rating < 10 ? car.rating + 1 : 0;
    dispatch({ type: "rate", id: car.id, rating: newRating });
  };

  return (
    <div className="car-profile">
      <h2>{car.brand}</h2>
      <p>ID: {car.id}</p>
      <p>Production Date: {car.productionDate}</p>
      <p>License Plate: {car.licensePlate}</p>
      <RatingBar rate={car.rating} />

      <div className="car-buttons">
        <button onClick={() => dispatch({ type: "edit", id: car.id })}>Edit</button>
        <button onClick={() => dispatch({ type: "delete", id: car.id })}>Delete</button>
        <button onClick={handleRate}>Rate</button>
      </div>
    </div>
  );
};

export default CarProfile;
