// src/context/TodoContext.tsx
import { createContext, useContext } from "react";
import type { Todo } from "../types/todo";

export const TodoStateContext = createContext<Todo[] | undefined>(undefined);

export const TodoDispatchContext = createContext<
  TodoDispatchContextValue | undefined
>(undefined);

interface TodoDispatchContextValue {
  onCreate: (content: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

// 상태 조회 훅
export const useTodoState = () => {
  const ctx = useContext(TodoStateContext);
  if (!ctx) throw new Error("TodoStateContext.Provider not found");
  return ctx;
};

// 디스패치 조회 훅
export const useTodoDispatch = () => {
  const ctx = useContext(TodoDispatchContext);
  if (!ctx) throw new Error("TodoDispatchContext.Provider not found");
  return ctx;
};
