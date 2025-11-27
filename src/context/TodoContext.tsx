import { createContext, useContext } from "react";
import type { Todo } from "../types/todo";

interface ITodoContext {
  todos: Todo[];
  onCreate: (content: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

export const useTodoContext = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("TodoContextProvider 내부에서 사용해야 합니다.");
  return ctx;
};
