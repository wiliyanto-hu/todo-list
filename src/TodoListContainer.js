import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { withStyles } from "@material-ui/styles";
import { today, fullDate } from "./date";
import { DispatchContextProvider } from "./context/TodosContext";

const styles = {
  container: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "7px",
    margin: "2rem auto",
  },
  header: {
    backgroundColor: "rgb(245,245,255)",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    fontFamily: "Work Sans, sans-serif",
    textAlign: "left",
    padding: "0.5rem 1rem ",
  },
};
const TodoListContainer = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 style={{ fontWeight: 400, color: "rgb(98,104,216)" }}>{today}</h2>
        <h2 style={{ color: "rgba(0,0,0,0.65)" }}>{fullDate}</h2>
      </div>
      <DispatchContextProvider>
        <TodoForm />
        <TodoList />
      </DispatchContextProvider>
    </div>
  );
};

export default withStyles(styles)(TodoListContainer);
