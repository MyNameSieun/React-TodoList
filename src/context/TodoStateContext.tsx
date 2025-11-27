import { createContext, useContext } from "react";
import type { Todo } from "../types/todo";

export const TodoStateContext = createContext<Todo[] | undefined>(undefined);

export const useTodoState = () => {
  const ctx = useContext(TodoStateContext);
  if (!ctx) throw new Error("TodoStateProvider not found");
  return ctx;
};
