import Todo from "./Todo";
import React from "react";
import { dispatchContext } from "./context/TodosContext";
import Divider from "./Divider";
const TodoList = () => {
  const { todos } = React.useContext(dispatchContext);
  const todosList = todos.map((todo, index) => (
    <>
      <Todo
        task={todo.task}
        key={todo.id}
        id={todo.id}
        // removeTodo={removeTodo}
        isComplete={todo.isComplete}
        // doneTodo={doneTodo}
        // editTodo={editTodo}
      />
      {index < todos.length - 1 && <Divider />}
    </>
  ));
  return <div>{todosList}</div>;
};
export default TodoList;
