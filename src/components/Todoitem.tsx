const Todoitem = () => {
  return (
    <div className="flex items-center border-b border-gray-300">
      <input type="checkbox" />
      <div className="ml-1 flex-1 border-gray-300 py-3 text-sm">
        React공부하기
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <data className="">{new Date().toDateString()}</data>
        <button className="cursor-pointer rounded-sm bg-gray-100 px-2 py-1">
          삭제
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
