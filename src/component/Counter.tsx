import React, { FC, useState } from "react";
import { Button } from "semantic-ui-react";

const Counter: FC<{}> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>This is Counter</h1>
      <p>{count}</p>
      <Button onClick={() => setCount(count + 1)}>increment</Button>
      <Button onClick={() => setCount(count - 1)}>decrement</Button>
    </>
  );
};

export default Counter;
