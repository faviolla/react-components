import { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => (prevState + 1));
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterComponent;
