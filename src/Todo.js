import React from "react";
import { withStyles } from "@material-ui/styles";
import toggle from "./hooks/toggle";
import EditForm from "./EditTodo";
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
  removeTodo,
  id,
  isComplete,
  doneTodo,
  editTodo,
}) => {
  const [isEditing, toggleEdit] = toggle(false);
  if (isEditing) {
    return (
      <EditForm
        toggleEdit={toggleEdit}
        task={task}
        editTodo={editTodo}
        id={id}
      />
    );
  }
  return (
    <div className={classes.Todo}>
      <input type="checkbox" onChange={() => doneTodo(id)} />
      <span className={classes.task}>{task}</span>
      <span onClick={toggleEdit}>edit</span>
      <span
        onClick={() => {
          removeTodo(id);
          console.log(id);
        }}
      >
        Delete
      </span>
    </div>
  );
};
export default withStyles(styles)(Todo);
