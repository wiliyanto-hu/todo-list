import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
import { withStyles } from "@material-ui/styles";
const styles = {
  Form: {
    height: "2.5rem",
    backgroundColor: "red",
  },
  FormInput: {
    height: "100%",
    border: "none",
    outline: "none",
    padding: "1rem",
    fontSize: "1.2rem",
  },
};
const TodoForm = ({ classes }) => {
  const { dispatch } = React.useContext(dispatchContext);

  const [value, setValue, clearValue] = InputState("");
  return (
    <div className={classes.Form}>
      <form>
        <input
          type="text"
          onChange={setValue}
          value={value}
          className={classes.FormInput}
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
export default withStyles(styles)(TodoForm);
