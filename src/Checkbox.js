import React from "react";
import { dispatchContext } from "./context/TodosContext";
import "./Checkbox.css";

const Checkbox = ({ id, isComplete }) => {
  const { dispatch } = React.useContext(dispatchContext);
  return (
    <label className="container">
      <input
        type="checkbox"
        onChange={() => dispatch({ type: "done", id })}
        checked={isComplete}
      />
      <span className="box"></span>
    </label>
  );
};
export default Checkbox;
