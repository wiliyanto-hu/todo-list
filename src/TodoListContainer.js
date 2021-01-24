import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { withStyles } from "@material-ui/styles";
import { today, fullDate } from "./date";
import { dispatchContext } from "./context/TodosContext";
import { alertContext } from "./context/AlertContext";
import styles from "./styles/TodoListContainerStyles";
import Alert from "./Alert";
const TodoListContainer = ({ classes }) => {
  const { todos } = React.useContext(dispatchContext);
  const { isAlert } = React.useContext(alertContext);
  return (
    <div className={classes.container}>
      {isAlert && <Alert />}
      <div className={classes.header}>
        <div className={classes.leftSide}>
          <h2 style={{ fontWeight: 400, color: "rgb(98,104,216)" }}>{today}</h2>
          <h2 style={{ color: "rgba(0,0,0,0.65)" }}>{fullDate}</h2>
        </div>
        <div className={classes.rightSide}>
          <h2>
            {1 > todos.length
              ? "You have no task"
              : `${todos.length} task left`}
          </h2>
        </div>
      </div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default withStyles(styles)(TodoListContainer);
