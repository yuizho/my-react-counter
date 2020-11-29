import React, { FC } from "react";
import { Button } from "semantic-ui-react";
import { createStore, Reducer } from "redux";
import { useSelector, useDispatch } from "react-redux";

// actions
const CounterActionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
} as const;

type ValueOf<T> = T[keyof T];

type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
};

const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT
});

const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT
});

// reducer
type CounterState = {
  count: number;
};
const counterReducer: Reducer<CounterState, CounterAction> = (
  state = { count: 0 },
  action: CounterAction
) => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
};

// store
export const store = createStore(counterReducer, { count: 0 });

const Counter: FC<{}> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>This is Counter</h1>
      <p>{count}</p>
      <Button onClick={() => dispatch(increment())}>increment</Button>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>
    </>
  );
};

export default Counter;
