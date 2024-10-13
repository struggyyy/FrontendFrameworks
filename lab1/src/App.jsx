import './App.css';
import { data } from './module-data';
import CarProfile from './components/CarProfile';

function App() {
  return (
    <div className="App">
      <h1>Car Profiles</h1>
      <div className="car-list">
        {data.map(car => (
          <CarProfile key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
