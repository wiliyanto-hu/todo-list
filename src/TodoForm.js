import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
const TodoForm = () => {
  const { dispatch } = React.useContext(dispatchContext);

  const [value, setValue, clearValue] = InputState("");
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={setValue}
          value={value}
          placeholder="Insert Todo"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "add", task: value });
            clearValue();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
