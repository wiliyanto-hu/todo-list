import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
const EditTodo = ({ toggleEdit, task, id }) => {
  const { dispatch } = React.useContext(dispatchContext);
  const [value, setValue] = InputState(task);
  return (
    <form>
      <input value={value} onChange={setValue} />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: "edit", task: value, id });
          toggleEdit();
        }}
      >
        GOGO
      </button>
    </form>
  );
};
export default EditTodo;
