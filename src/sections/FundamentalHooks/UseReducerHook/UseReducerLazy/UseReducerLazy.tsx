import { useReducer } from 'react';
import { counterReducer, initialCounterState, CounterState, CounterActionType } from './counterReducer';

const Counter = () => {
  const counterInitializer = (initialState: CounterState) => {
    localStorage.setItem('count', '12');

    const localStorageCount = localStorage.getItem('count');
    const count = localStorageCount ? parseInt(localStorageCount) : 0;

    return {
      count: initialState.count + count,
    };
  };

  const [state, dispatch] = useReducer(counterReducer, initialCounterState, counterInitializer);

  const increment = () => dispatch({ type: CounterActionType.Increment, payload: 1 });

  return <button onClick={increment}>{state.count}</button>;
};

const UseReducerLazy = () => {
  return (
    <div className="Example">
      <h4>Lazy initialization</h4>
      <Counter />
    </div>
  );
};

export { UseReducerLazy };
