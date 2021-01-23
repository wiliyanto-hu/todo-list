import { v4 as uuidv4 } from "uuid";

function reducer(todos, action) {
  switch (action.type) {
    case "delete":
      return todos.filter((todo) => action.id !== todo.id);
    case "add":
      return [...todos, { task: action.task, id: uuidv4(), isComplete: false }];
    case "done":
      return todos.map((todo) => {
        if (action.id === todo.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    case "edit":
      return todos.map((todo) => {
        if (action.id === todo.id) {
          return { ...todo, task: action.task };
        }
        return todo;
      });
  }
}
export default reducer;
