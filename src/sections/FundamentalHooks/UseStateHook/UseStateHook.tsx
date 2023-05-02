import { Outlet } from 'react-router-dom';

const UseStateHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useState Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseStateHook };
