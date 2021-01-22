import React from "react";
import { withStyles } from "@material-ui/styles";
import toggle from "./hooks/toggle";
import EditForm from "./EditTodo";
import { dispatchContext } from "./context/TodosContext";
const styles = {
  Todo: {
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "3rem",
  },
  TodoTask: {
    marginLeft: "1rem",

    "& span": {
      marginLeft: "1.5rem",
      color: "rgba(0,0,0,0.7)",
      fontFamily: "Rubik, sans-serif",
    },
    "& input": {
      "&:checked": {
        color: "red",
      },
    },
  },
  TodoBtns: {
    marginRight: "1rem",
    "& i": {
      margin: "0 1rem",

      "&.fa-trash": {
        "&:hover": {
          color: "red",
        },
      },
      "&.fa-edit": {
        color: "rgb(98,104,216)",
        "&:hover": {
          color: "rgb(49,58,214)",
        },
      },
    },
  },
  task: {
    textDecoration: (props) => (props.isComplete ? "line-through" : "none"),
  },
};
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
        <span className={classes.task}>{task}</span>
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
