import TodoListContainer from "./TodoListContainer";
import { DispatchContextProvider } from "./context/TodosContext";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DispatchContextProvider>
        <TodoListContainer />
      </DispatchContextProvider>
    </div>
  );
}

export default App;
