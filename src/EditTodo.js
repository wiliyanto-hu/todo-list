import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
import { alertContext } from "./context/AlertContext";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/EditTodoStyles";

const EditTodo = ({ toggleEdit, task, id, classes, inputRef }) => {
  const { toggleAlert } = React.useContext(alertContext);
  const { dispatch } = React.useContext(dispatchContext);
  const [value, setValue] = InputState(task);
  React.useEffect(() => inputRef.current && inputRef.current.focus());
  return (
    <form className={classes.EditTodo}>
      <input
        value={value}
        onChange={setValue}
        type="text"
        maxLength="35"
        ref={inputRef}
      />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (value.trim() === "") {
              toggleAlert();
            } else {
              dispatch({ type: "edit", task: value, id });
              toggleEdit();
            }
          }}
        >
          ✓
        </button>
      </div>
    </form>
  );
};
export default withStyles(styles)(EditTodo);
