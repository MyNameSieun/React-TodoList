import React from "react";
import type { Todo } from "../types/todo";
import { useTodoDispatch } from "../context/TodoDispath";
const Todoitem = ({ id, isDone, content, date }: Todo) => {
  const { onUpdate, onDelete } = useTodoDispatch();
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="flex items-center border-b border-gray-300">
      <input onChange={onChangeCheckbox} type="checkbox" checked={isDone} />
      <div className="ml-1 flex-1 border-gray-300 py-3 text-sm">{content}</div>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <data>{new Date(date).toLocaleDateString()}</data>
        <button
          onClick={onClickDeleteButton}
          className="cursor-pointer rounded-sm bg-gray-100 px-2 py-1"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default React.memo(Todoitem);
