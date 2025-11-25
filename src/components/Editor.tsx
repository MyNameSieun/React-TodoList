const Editor = () => {
  return (
    <div className="flex gap-2 text-xs">
      <input
        placeholder="새로운 Todo..."
        className="flex-1 rounded-sm border border-gray-300 px-3 py-3 outline-blue-300"
      />
      <button className="cursor-pointer rounded-sm bg-blue-400 px-3 text-white">
        추가
      </button>
    </div>
  );
};

export default Editor;
