import { useMemo, useState } from "react";

const heavyWork = () => {
  let sum = 0;
  for (let i = 0; i < 300_000_000; i++) {
    sum += i;
  }

  console.timeEnd("heavyWork");
  return sum;
};

const HeavyComponent = () => {
  const [count, setCount] = useState(0);

  // CASE 1: useMemo 안 쓴 버전
  // const value = heavyWork();

  // CASE 2: useMemo 쓴 버전
  const value = useMemo(() => heavyWork(), []);

  return (
    <>
      <p>{value} 을 가져오는 무거운 작업을 하는 컴포넌트</p>
      <button
        className="rounded bg-indigo-500 px-4 py-2 text-white transition-colors hover:bg-indigo-600"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가
      </button>
      <br />
      {count}
    </>
  );
};

export default HeavyComponent;
