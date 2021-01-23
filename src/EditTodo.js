import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/EditTodoStyles";

const EditTodo = ({ toggleEdit, task, id, classes }) => {
  const { dispatch } = React.useContext(dispatchContext);
  const [value, setValue] = InputState(task);
  return (
    <form className={classes.EditTodo}>
      <input value={value} onChange={setValue} type="text" maxlength="35" />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "edit", task: value, id });
            toggleEdit();
          }}
        >
          ✓
        </button>
      </div>
    </form>
  );
};
export default withStyles(styles)(EditTodo);
