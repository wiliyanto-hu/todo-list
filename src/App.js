import TodoListContainer from "./TodoListContainer";
import { DispatchContextProvider } from "./context/TodosContext";
import { AlertProvider } from "./context/AlertContext";
import "@fortawesome/fontawesome-free/css/all.css";
// import Alert from "./Alert";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DispatchContextProvider>
        {/* <Alert /> */}
        <AlertProvider>
          <TodoListContainer />
        </AlertProvider>
      </DispatchContextProvider>
    </div>
  );
}

export default App;
