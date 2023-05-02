import { useReducer } from 'react';
import { counterReducer, initialCounterState, CounterActionType } from './counterReducer';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const increment = () => dispatch({ type: CounterActionType.Increment, payload: 1 });
  const decrement = () => dispatch({ type: CounterActionType.Decrement, payload: 1 });

  return (
    <>
      <p>{state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

const UseReducerCounterDecrement = () => {
  return (
    <div className="Example">
      <h4>Increment/decrement counter (using an object for state)</h4>
      <Counter />
    </div>
  );
};

export { UseReducerCounterDecrement };
