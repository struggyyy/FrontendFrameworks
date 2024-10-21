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
    return <h1>Nie znaleziono auta o tym identyfikatorze.</h1>;
  }

  return (
    <div>
      <h1>Profil Auta</h1>
      <p>ID: {person.id}</p>
      <p>Marka: {person.brand}</p>
      <p>Data produkcji: {person.productionDate}</p>
      <p>Tablica rejestracyjna: {person.licensePlate}</p>
    </div>
  );
};

export default Lab2;
