import "./App.scss";
import WrapperComponent from "./components/wrapperComponent";
// TODO:
//The user needs to be able to add, complete, delete, and modify tasks.  # DONE: add, complete, delete
// The user needs to be able to mark all tasks completed with one button.
// Users need to be able to Filter: active tasks, all tasks, and completed tasks.

function App() {
  return (
    <div className="app">
      <WrapperComponent />
    </div>
  );
}

export default App;
