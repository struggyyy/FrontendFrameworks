import React, { useReducer } from 'react';
import CarProfile from '../components/CarProfile';
import { data as cars } from '../data/module-data';
import AppReducer from '../data/AppReducer';

const Lab3 = () => {
  const [carItems, dispatch] = useReducer(AppReducer, cars);

  return (
    <div>
      <h1>Car Profiles with Rating</h1>
      <div>
        {carItems.map((car) => (
          <CarProfile key={car.id} car={car} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default Lab3;
