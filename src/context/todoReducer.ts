// src/context/todoReducer.ts
import type { Todo } from "../types/todo";

export type Action =
  | { type: "CREATE"; data: Todo }
  | { type: "UPDATE"; targetId: string }
  | { type: "DELETE"; targetId: string };

export const reducer = (state: Todo[], action: Action): Todo[] => {
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
