import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import NotFound from "./pages/NotFound";
import CarAddForm from "./pages/CarAddForm";
import CarEditForm from "./pages/CarEditForm";
import UserDetails from './pages/UserDetails';
import PostComments from './pages/PostComments';
import AppProvider from "./data/AppProvider";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />,
  },
  {
    id: 2,
    label: "Lab1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />,
  },
  {
    id: 3,
    label: "Lab2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
  },
  {
    id: 4,
    label: "Not Found",
    url: "*",
    urlPattern: "*",
    element: <NotFound />,
  },
  {
    id: 5,
    label: "Lab3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3 />,
  },
  {
    id: 6,
    label: "Lab4",
    url: "/lab4",
    urlPattern: "/lab4",
    element: <Lab4 />,
  },
  {
    id: 7,
    label: "Add Car",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <CarAddForm />,
  },
  {
    id: 8,
    label: "Edit Car",
    url: "/lab4/edit/:id",
    urlPattern: "/lab4/edit/:id",
    element: <CarEditForm />,
  },
  {
    id: 9,
    label: "Lab5",
    url: "/lab5",
    urlPattern: "/lab5",
    element: <Lab5 />,
  },
];

function App() {
  return (
    <AppProvider>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route
              key={item.id}
              path={item.urlPattern}
              element={item.element}
            />
          ))}
          <Route path="/lab5/users/:id" element={<UserDetails />} />
          <Route path="/lab5/posts/:id/comments" element={<PostComments />} />
        </Routes>
      </RootLayout>
    </AppProvider>
  );
}

export default App;
