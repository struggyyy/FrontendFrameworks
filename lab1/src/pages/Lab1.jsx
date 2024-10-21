import React from 'react';
import CarProfile from '../components/CarProfile';
import { data as cars } from '../data/module-data';

const Lab1 = () => {
  return (
    <div>
      <h1>Car Profiles</h1>
      <div>
        {cars.map((car) => (
          <CarProfile key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Lab1;
