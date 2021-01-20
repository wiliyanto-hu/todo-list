import InputState from "./hooks/InputState";
const TodoForm = ({ addTodo }) => {
  const [value, setValue, clearValue] = InputState("");
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={setValue}
          value={value}
          placeholder="Insert Todo"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addTodo(value);
            clearValue();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
