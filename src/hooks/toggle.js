import React from "react";

const Toggle = (initialVal = false) => {
  const [state, setState] = React.useState(initialVal);

  const toggle = () => setState(!state);

  return [state, toggle];
};
export default Toggle;
