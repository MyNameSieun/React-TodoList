import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  return (
    <div className="mx-auto mt-30 flex h-140 w-[700px] flex-col gap-10 rounded-2xl bg-white p-10 px-10 shadow-md">
      <Header />

      <Editor />

      <div className="scrollbar-hide overflow-y-auto">
        <List />
      </div>
    </div>
  );
};

export default App;
