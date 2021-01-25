import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/TodoFormStyles.js";
import { alertContext } from "./context/AlertContext";
const TodoForm = ({ classes }) => {
  const { dispatch } = React.useContext(dispatchContext);
  const { toggleAlert } = React.useContext(alertContext);
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
          maxLength="35"
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (value.trim() === "") {
                toggleAlert();
              } else {
                dispatch({ type: "add", task: value });
                clearValue();
              }
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
