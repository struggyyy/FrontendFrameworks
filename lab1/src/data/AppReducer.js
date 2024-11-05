const AppReducer = (state, action) => {
  switch (action.type) {
      case "add": {
          return [...state, action.car];
      }
      case "edit": {
          const index = state.findIndex(item => item.id === action.id);
          if (index === -1) {
              throw new Error(`Edit action requires a car with a valid id: ${action.id}`);
          }
          const updatedState = [...state];
          updatedState[index] = { ...updatedState[index], ...action.updatedCar };
          return updatedState;
      }
      case "rate": {
          return state.map(item => 
              item.id === action.id ? { ...item, rating: action.rating } : item
          );
      }
      case "delete": {
          return state.filter(item => item.id !== action.id);
      }
      default:
          return state;
  }
};

export default AppReducer;
