import React from 'react';
import CarProfileDisplay from '../components/CarProfileDisplay';
import { data as cars } from '../data/module-data';

const Lab1 = () => {
  return (
    <div>
      <h1>Car Profiles</h1>
      <div>
        {cars.map((car) => (
          <CarProfileDisplay key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Lab1;
