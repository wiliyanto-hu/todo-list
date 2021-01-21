import React from "react";
import { withStyles } from "@material-ui/styles";
import toggle from "./hooks/toggle";
import EditForm from "./EditTodo";
import { dispatchContext } from "./context/TodosContext";
const styles = {
  Todo: {
    fontSize: "1.2rem",
  },
  task: {
    textDecoration: (props) => (props.isComplete ? "line-through" : "none"),
  },
};
const Todo = ({
  task,
  classes,
  // removeTodo,
  id,
  isComplete,
  // doneTodo,
  // editTodo,
}) => {
  const { dispatch } = React.useContext(dispatchContext);
  const [isEditing, toggleEdit] = toggle(false);
  if (isEditing) {
    return (
      <EditForm
        toggleEdit={toggleEdit}
        task={task}
        // editTodo={editTodo}
        id={id}
      />
    );
  }
  return (
    <div className={classes.Todo}>
      <input type="checkbox" onChange={() => dispatch({ type: "done", id })} />
      <span className={classes.task}>{task}</span>
      <span onClick={toggleEdit}>edit</span>
      <span
        onClick={() => {
          dispatch({ type: "delete", id });
        }}
      >
        Delete
      </span>
    </div>
  );
};
export default withStyles(styles)(Todo);
