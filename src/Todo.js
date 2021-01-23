import React from "react";
import { withStyles } from "@material-ui/styles";
import toggle from "./hooks/toggle";
import EditForm from "./EditTodo";
import { dispatchContext } from "./context/TodosContext";
import styles from "./styles/TodoStyles";
const Todo = ({ task, classes, id, isComplete }) => {
  const { dispatch } = React.useContext(dispatchContext);
  const [isEditing, toggleEdit] = toggle(false);
  if (isEditing) {
    return <EditForm toggleEdit={toggleEdit} task={task} id={id} />;
  }
  return (
    <div className={classes.Todo}>
      <div className={classes.TodoTask}>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "done", id })}
        />
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
