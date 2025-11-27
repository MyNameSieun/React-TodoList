import React from "react";

const Box3 = () => {
  console.log("Box3 렌더링");
  return <div className="h-[100px] w-[100px] bg-green-300">Box1</div>;
};

export default React.memo(Box3);
