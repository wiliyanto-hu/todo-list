import React from "react";

const InputState = (initialVal = "") => {
  const [state, setState] = React.useState(initialVal);

  const onChange = (e) => setState(e.target.value);
  const clear = () => setState("");
  return [state, onChange, clear];
};
export default InputState;
