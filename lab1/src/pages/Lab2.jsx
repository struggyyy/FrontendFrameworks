import React from 'react';
import { useParams } from 'react-router-dom';
import { data as persons } from '../data/module-data';

const Lab2 = () => {
  const { id } = useParams();
  const person = persons.find(p => p.id === Number(id));

  if (!id) {
    return <h1>Brak identyfikatora auta.</h1>;
  }

  if (!person) {
    return <h1>Car with this ID is not found.</h1>;
  }

  return (
    <div>
      <h1>Car Profile</h1>
      <div className="car-profile">
      <h2>{person.brand}</h2>
      <p>ID: {person.id}</p>
      <p>Production Date: {person.productionDate}</p>
      <p>License Plate: {person.licensePlate}</p>
      </div>
    </div>
  );
};

export default Lab2;
