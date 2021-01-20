import InputState from "./hooks/InputState";
const EditTodo = ({ toggleEdit, task, editTodo, id }) => {
  const [value, setValue] = InputState(task);
  return (
    <form>
      <input value={value} onChange={setValue} />
      <button
        onClick={(e) => {
          e.preventDefault();
          editTodo(id, value);
          toggleEdit();
        }}
      >
        GOGO
      </button>
    </form>
  );
};
export default EditTodo;
