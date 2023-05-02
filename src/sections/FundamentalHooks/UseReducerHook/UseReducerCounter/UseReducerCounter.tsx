import { useReducer } from 'react';

const counterReducer = (state: number, action: number) => state + action;

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  const increment = () => dispatch(1);

  return <button onClick={increment}>{state}</button>;
};

const UseReducerCounter = () => {
  return (
    <div className="Example">
      <h4>Counter</h4>
      <Counter />
    </div>
  );
};

export { UseReducerCounter };
