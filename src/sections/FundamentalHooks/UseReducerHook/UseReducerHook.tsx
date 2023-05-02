import { Outlet } from 'react-router-dom';

const UseReducerHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useReducer Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseReducerHook };
