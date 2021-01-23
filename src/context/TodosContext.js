import React from "react";
import todoReducer from "../reducer/TodosReducer";
import LocalStorageReducer from "../reducer/LocalStorageReducer";
const defaultTodos = [
  { task: "Do Laundry", id: 1, isComplete: false },
  { task: "Meditate", id: 2, isComplete: false },
];

export const dispatchContext = React.createContext();

export const DispatchContextProvider = ({ children }) => {
  const [todos, dispatch] = LocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <dispatchContext.Provider value={{ todos, dispatch }}>
      {children}
    </dispatchContext.Provider>
  );
};
