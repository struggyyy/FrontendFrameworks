import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CarProfile from "../components/CarProfile";
import AppContext from "../data/AppContext";

const Lab4 = () => {
  const context = useContext(AppContext);
  const { items } = context;
  const navigate = useNavigate();

  const handleAddCar = () => {
    navigate("/lab4/add");
  };

  return (
    <div>
      <h1>Car Profiles</h1>
      <div className="car-buttons">
        <button onClick={handleAddCar} style={{ marginBottom: "20px" }}>
          Add Car
        </button>
      </div>
      {items.map((car) => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Lab4;
