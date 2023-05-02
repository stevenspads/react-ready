import { Outlet } from 'react-router-dom';

const UseCallbackHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useCallback Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseCallbackHook };
