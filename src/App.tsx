import { mockData } from "./mockData";

import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content: string) => {
    const newTodo = {
      id: uuidv4(),
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const onDelete = (targetId: string) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="mx-auto mt-30 flex h-140 w-[700px] flex-col gap-10 rounded-2xl bg-white p-10 px-10 shadow-md">
      <Header />
      <Editor onCreate={onCreate} />
      <div className="scrollbar-hide overflow-y-auto">
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default App;
