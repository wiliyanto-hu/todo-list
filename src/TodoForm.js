import React from "react";
import InputState from "./hooks/InputState";
import { dispatchContext } from "./context/TodosContext";
import { withStyles } from "@material-ui/styles";
const styles = {
  Form: {
    height: "3rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  FormInput: {
    height: "100%",
    border: "none",
    outline: "none",
    fontSize: "1.2rem",
    flexBasis: "85%",
    paddingLeft: "1rem",
  },
  FormAddBtn: {
    borderRadius: "50%",
    backgroundColor: "rgb(250,103,104)",
    color: "white",
    border: "none",
    outline: "none",
    fontSize: "1.5rem",
    margin: "0 1rem",
    width: "2.5rem",
    height: "80%",
    "&:hover": {
      backgroundColor: "rgb(255,79,80)",
    },
  },
};
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
        />
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
      </form>
    </div>
  );
};
export default withStyles(styles)(TodoForm);
