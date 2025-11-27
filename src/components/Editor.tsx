import { useContext, useRef, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../context/TodoDispath";

const Editor = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLInputElement>(null);
  const { onCreate } = useTodoDispatch();
  const data = useContext(TodoDispatchContext);
  console.log(data);

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content.trim() === "") {
      contentRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="flex gap-2 text-xs">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
        className="flex-1 rounded-sm border border-gray-300 px-3 py-3 outline-blue-300"
      />
      <button
        onClick={onSubmit}
        className="cursor-pointer rounded-sm bg-blue-400 px-3 text-white"
      >
        추가
      </button>
    </div>
  );
};

export default Editor;
