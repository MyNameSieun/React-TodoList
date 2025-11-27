import { mockData } from "./mockData";

import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { useCallback, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Todo } from "./types/todo";
import { TodoContext } from "./context/TodoContext";

type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "UPDATE"; targetId: string }
  | { type: "DELETE"; targetId: string };

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: uuidv4(),
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId: string) => {
    dispatch({ type: "UPDATE", targetId: targetId });
  }, []);

  const onDelete = useCallback((targetId: string) => {
    dispatch({ type: "DELETE", targetId: targetId });
  }, []);

  return (
    <div className="mx-auto mt-30 flex h-140 w-[700px] flex-col gap-10 rounded-2xl bg-white p-10 px-10 shadow-md">
      <Header />
      <TodoContext.Provider value={{ todos, onCreate, onUpdate, onDelete }}>
        <Editor />
        <div className="scrollbar-hide overflow-y-auto">
          <List />
        </div>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
