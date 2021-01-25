import React from "react";
import EditForm from "./EditTodo";
import Checkbox from "./Checkbox";
import toggle from "./hooks/toggle";
import { dispatchContext } from "./context/TodosContext";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/TodoStyles";

const Todo = ({ task, classes, id, isComplete }) => {
  const { dispatch } = React.useContext(dispatchContext);
  const [isEditing, toggleEdit] = toggle(false);
  const inputRef = React.useRef();

  if (isEditing) {
    return (
      <EditForm
        toggleEdit={toggleEdit}
        task={task}
        id={id}
        inputRef={inputRef}
      />
    );
  }
  return (
    <div className={classes.Todo}>
      <div className={classes.TodoTask}>
        <Checkbox id={id} isComplete={isComplete} />
        <p className={classes.task}>{task}</p>
      </div>
      <div className={classes.TodoBtns}>
        <span onClick={toggleEdit}>
          <i className="far fa-edit"></i>
        </span>
        <span
          onClick={() => {
            dispatch({ type: "delete", id });
          }}
        >
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </div>
  );
};
export default withStyles(styles)(Todo);
