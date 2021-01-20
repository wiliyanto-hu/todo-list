import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { withStyles } from "@material-ui/styles";
import { today, fullDate } from "./date";
import { v4 as uuidv4 } from "uuid";

const todoss = [
  { task: "Do Laundry", id: 1, isComplete: false },
  { task: "Meditate", id: 2, isComplete: false },
];
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
  const [todos, setTodos] = React.useState(todoss);
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const addTodo = (task) => {
    const newTodos = [...todos, { task, id: uuidv4(), isComplete: false }];
    setTodos(newTodos);
  };
  const doneTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const editTodo = (id, task) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, task };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 style={{ fontWeight: 400, color: "rgb(98,104,216)" }}>{today}</h2>
        <h2 style={{ color: "rgba(0,0,0,0.65)" }}>{fullDate}</h2>
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        removeTodo={removeTodo}
        todos={todos}
        doneTodo={doneTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default withStyles(styles)(TodoListContainer);
