import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>{count}</button>;
};

const App = () => {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
};

const StateIsPrivate = () => {
  return (
    <div className="Example">
      <h4>State is private</h4>
      <App />
    </div>
  );
};

export { StateIsPrivate };
