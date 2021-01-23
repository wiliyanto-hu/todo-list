import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/TodoFormStyles.js";

const TodoForm = ({ classes }) => {
  const { dispatch } = React.useContext(dispatchContext);

  const [value, setValue, clearValue] = InputState("");
  return (
    <div>
      <form className={classes.Form}>
        <input
          type="text"
          onChange={setValue}
          value={value}
          className={classes.FormInput}
          placeholder="Insert Todo"
          maxlength="35"
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "add", task: value });
              clearValue();
            }}
            className={classes.FormAddBtn}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};
export default withStyles(styles)(TodoForm);
