import { Outlet } from 'react-router-dom';

const UseTransitionHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useTransition Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseTransitionHook };
