import { useCounter } from './hooks';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const CounterCustomHook = () => {
  return (
    <div className="Example">
      <h4>useCounter() custom Hook</h4>
      <Counter />
    </div>
  );
};

export { CounterCustomHook };
