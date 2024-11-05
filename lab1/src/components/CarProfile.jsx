import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../data/AppContext';
import RatingBar from './RatingBar';

const CarProfile = ({ car }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRate = () => {
    const newRating = car.rating < 10 ? car.rating + 1 : 0;
    dispatch({ type: "rate", id: car.id, rating: newRating });
  };

  const handleEdit = () => {
    navigate(`/lab4/edit/${car.id}`);
  };

  const handleDelete = () => {
    dispatch({ type: "delete", id: car.id });
  };

  return (
    <div className="car-profile">
      <h2>{car.brand}</h2>
      <p>ID: {car.id}</p>
      <p>Production Date: {car.productionDate}</p>
      <p>License Plate: {car.licensePlate}</p>
      <RatingBar rate={car.rating} />

      <div className="car-buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleRate}>Rate</button>
      </div>
    </div>
  );
};

export default CarProfile;
