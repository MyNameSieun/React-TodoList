import { createContext, useContext } from "react";

interface TodoDispatchContextValue {
  onCreate: (content: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoDispatchContext = createContext<
  TodoDispatchContextValue | undefined
>(undefined);

export const useTodoDispatch = () => {
  const ctx = useContext(TodoDispatchContext);
  if (!ctx) throw new Error("TodoDispatchProvider not found");
  return ctx;
};
