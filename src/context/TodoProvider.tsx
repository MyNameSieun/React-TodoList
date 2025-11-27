// src/context/TodoProvider.tsx

import { useReducer, useCallback, useMemo, type ReactNode } from "react";
import { TodoStateContext, TodoDispatchContext } from "./TodoContext";
import { reducer } from "./todoReducer";
import { mockData } from "../mockData";
import { v4 as uuidv4 } from "uuid";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(reducer, mockData);

  const onCreate = useCallback((content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: uuidv4(),
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId: string) => {
    dispatch({ type: "UPDATE", targetId });
  }, []);

  const onDelete = useCallback((targetId: string) => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  const memoizedDispatch = useMemo(
    () => ({ onCreate, onUpdate, onDelete }),
    [onCreate, onUpdate, onDelete],
  );

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={memoizedDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
