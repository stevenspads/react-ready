import { Outlet } from 'react-router-dom';

const UseEffectHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useEffect Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseEffectHook };
