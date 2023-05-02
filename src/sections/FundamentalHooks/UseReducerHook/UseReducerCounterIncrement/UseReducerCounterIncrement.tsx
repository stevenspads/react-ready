import { useReducer } from 'react';
import { counterReducer, initialCounterState, CounterActionType } from './counterReducer';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);

  const increment = () => dispatch({ type: CounterActionType.Increment, payload: 1 });

  return <button onClick={increment}>{state.count}</button>;
};

const UseReducerCounterIncrement = () => {
  return (
    <div className="Example">
      <h4>Increment counter (using an object for state)</h4>
      <Counter />
    </div>
  );
};

export { UseReducerCounterIncrement };
