import PropTypes from 'prop-types';

function CarProfile({ car }) {
  return (
    <div className="car-profile">
      <h2>{car.brand}</h2>
      <p>ID: {car.id}</p>
      <p>Production Date: {car.productionDate}</p>
      <p>License Plate: {car.licensePlate}</p>
    </div>
  );
}

CarProfile.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    productionDate: PropTypes.string.isRequired,
    licensePlate: PropTypes.string.isRequired
  }).isRequired
};

export default CarProfile;
