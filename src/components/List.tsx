import Todoitem from "./Todoitem";

const List = () => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-bold">Todo List ✨</h4>
      <input
        placeholder="검색어를 입력하세요"
        className="flex-1 border-b border-gray-200 py-3 text-xs outline-none focus:border-blue-400"
      />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
      <Todoitem />
    </div>
  );
};

export default List;
