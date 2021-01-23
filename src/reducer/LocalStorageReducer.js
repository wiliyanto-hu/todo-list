import React from "react";

const LocalStorageReducer = (key, initialValue, reducer) => {
  const [state, dispatch] = React.useReducer(reducer, initialValue, () => {
    let value;

    return (value = JSON.parse(localStorage.getItem(key)) || initialValue);
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};

export default LocalStorageReducer;
