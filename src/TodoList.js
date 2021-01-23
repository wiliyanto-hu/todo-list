import Todo from "./Todo";
import React from "react";
import { dispatchContext } from "./context/TodosContext";
import Divider from "./Divider";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/global";

const TodoList = () => {
  const { todos } = React.useContext(dispatchContext);
  const todosList = todos.map((todo, index) => (
    <CSSTransition key={todo.id} timeout={300} classNames="todo">
      <>
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          isComplete={todo.isComplete}
        />
        {index < todos.length - 1 && <Divider />}
      </>
    </CSSTransition>
  ));
  return (
    <div>
      <TransitionGroup>{todosList}</TransitionGroup>
    </div>
  );
};
export default withStyles(styles)(TodoList);
