import React from "react";

const Box1 = () => {
  console.log("Box1 렌더링");
  return <div className="h-[100px] w-[100px] bg-red-300">Box1</div>;
};

export default React.memo(Box1);
