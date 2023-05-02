import { Outlet } from 'react-router-dom';

const UseMemoHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useMemo Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseMemoHook };
