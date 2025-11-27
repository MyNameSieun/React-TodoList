import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="mx-auto mt-30 flex h-140 w-[700px] flex-col gap-10 rounded-2xl bg-white p-10 px-10 shadow-md">
        <Header />
        <Editor />
        <div className="scrollbar-hide overflow-y-auto">
          <List />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
