import { useReducer } from "react";

// 초기 상태 타입
interface State {
  count: number;
}

// 초기 상태
const initialState: State = { count: 0 };

// 액션 타입을 상수로 정의
const INCREMENT = "INCREMENT" as const;
const DECREMENT = "DECREMENT" as const;

// 액션 타입 정의
type Action =
  | { type: typeof INCREMENT; data: number }
  | { type: typeof DECREMENT; data: number };

// 리듀서 함수 정의
const reducerCounter = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.data };
    case DECREMENT:
      return { count: state.count - action.data };
    default:
      return state;
  }
};

const Counter = () => {
  // useReducer 훅 호출
  const [state, dispatch] = useReducer(reducerCounter, 0);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT, data: 1 })}>+</button>
      <button onClick={() => dispatch({ type: DECREMENT, data: 1 })}>-</button>
    </div>
  );
};

export default Counter;
