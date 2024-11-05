import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4 from './pages/Lab4';
import NotFound from './pages/NotFound';
import CarAddForm from './pages/CarAddForm';
import CarEditForm from './pages/CarEditForm';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';
import { data } from './data/module-data';
import './App.css';

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />
  },
  {
    id: 2,
    label: "Lab1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />
  },
  {
    id: 3,
    label: "Lab2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />
  },
  {
    id: 4,
    label: "Not Found",
    url: "*",
    urlPattern: "*",
    element: <NotFound />
  },
  {
    id: 5,
    label: "Lab3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3 />
  },
  {
    id: 6,
    label: "Lab4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4 />
  },
  {
    id: 7,
    label: "Add Car",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <CarAddForm />
  },
  {
    id: 8,
    label: "Edit Car",
    url: "/lab4/edit/:id",
    urlPattern: "/lab4/edit/:id",
    element: <CarEditForm />
  },
];

function App() {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map(item => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
