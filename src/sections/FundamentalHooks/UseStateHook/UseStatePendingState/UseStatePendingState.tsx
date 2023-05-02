import { useState } from 'react';

// 🔴 Bad: new state not computed from pending state

/*
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={increment}>{count}</button>;
};
*/

// ✅ Good: new state computed from the pending state

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return <button onClick={increment}>{count}</button>;
};

const UseStatePendingState = () => {
  return (
    <div className="Example">
      <h4>Updating state based on previous state</h4>
      <Counter />
    </div>
  );
};

export { UseStatePendingState };
