import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
    // 🔴 Bad: won't display the latest `count` value
    console.log(count);
  };

  return <button onClick={increment}>{count}</button>;
};

// 🔴 Bad: a local variable won't re-render the component
/*
const Counter = () => {
  let count: number = 0;

  const increment = () => count + 1;

  return <button onClick={increment}>{count}</button>
}
*/

const UseStateCounter = () => {
  return (
    <div className="Example">
      <h4>useState counter</h4>
      <Counter />
    </div>
  );
};

export { UseStateCounter };
