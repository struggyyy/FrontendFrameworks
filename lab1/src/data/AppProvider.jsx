import { data } from "./module-data";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import React, { useReducer } from "react";

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;