import React from "react";

const Header = () => {
  return (
    <div>
      <h3 className="text-xl font-bold">오늘은 📅</h3>
      <h1 className="text-3xl font-bold text-blue-400">
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

export default React.memo(Header);
