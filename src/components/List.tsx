import { useMemo, useState } from "react";
import Todoitem from "./Todoitem";
import { useTodoState } from "../context/TodoContext";

const List = () => {
  const [search, setSearch] = useState("");
  const todos = useTodoState();

  const onChangeSerach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase().trim()),
    );
  };
  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    // 메모이제이션 하고 싶은 연산
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-bold">Todo List ✨</h4>
      <div>total: {totalCount}</div>
      <div>Done: {doneCount}</div>
      <div>notDoneCount: {notDoneCount}</div>

      <input
        value={search}
        onChange={onChangeSerach}
        placeholder="검색어를 입력하세요"
        className="flex-1 border-b border-gray-200 py-3 text-xs outline-none focus:border-blue-400"
      />
      {filteredTodos.map((todo) => {
        return <Todoitem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export default List;
