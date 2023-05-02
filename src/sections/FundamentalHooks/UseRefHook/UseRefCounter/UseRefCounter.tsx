import { useRef } from 'react';

const Counter = () => {
  const ref = useRef<number>(0);

  const increment = () => {
    // does not trigger a component re-render
    ref.current++;
    console.log(`${ref.current} button clicks.`);
  };

  return <button onClick={increment}>{ref.current}</button>;
};

const UseRefCounter = () => {
  return (
    <div className="Example">
      <h4>Counter</h4>
      <Counter />
    </div>
  );
};

export { UseRefCounter };
