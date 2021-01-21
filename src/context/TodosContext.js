import React from "react";
import todoReducer from "../reducer/TodosReducer";
const todoss = [
  { task: "Do Laundry", id: 1, isComplete: false },
  { task: "Meditate", id: 2, isComplete: false },
];

export const dispatchContext = React.createContext();

export const DispatchContextProvider = ({ children }) => {
  const [todos, dispatch] = React.useReducer(todoReducer, todoss);

  return (
    <dispatchContext.Provider value={{ todos, dispatch }}>
      {children}
    </dispatchContext.Provider>
  );
};
