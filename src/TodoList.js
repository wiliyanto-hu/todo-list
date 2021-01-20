import Todo from "./Todo";
import React from "react";

const TodoList = ({ removeTodo, todos, doneTodo, editTodo }) => {
  const todosList = todos.map((todo) => (
    <Todo
      task={todo.task}
      id={todo.id}
      removeTodo={removeTodo}
      isComplete={todo.isComplete}
      doneTodo={doneTodo}
      editTodo={editTodo}
    />
  ));
  return <div>{todosList}</div>;
};
export default TodoList;
