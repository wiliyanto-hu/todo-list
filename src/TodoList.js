import Todo from "./Todo";
import React from "react";
import { dispatchContext } from "./context/TodosContext";
const TodoList = () => {
  const { todos } = React.useContext(dispatchContext);
  const todosList = todos.map((todo) => (
    <Todo
      task={todo.task}
      key={todo.id}
      id={todo.id}
      // removeTodo={removeTodo}
      isComplete={todo.isComplete}
      // doneTodo={doneTodo}
      // editTodo={editTodo}
    />
  ));
  return <div>{todosList}</div>;
};
export default TodoList;
