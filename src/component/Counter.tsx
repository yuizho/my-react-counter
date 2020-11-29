import React, { FC } from "react";
import { Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

// actions, reducer
type CounterState = {
  count: number;
};
export const coutnerSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => ({ ...state, count: state.count + 1 }),
    decrement: (state) => ({ ...state, count: state.count - 1 })
  }
});

const Counter: FC<{}> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();
  const { increment, decrement } = coutnerSlice.actions;
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
