import { Outlet } from 'react-router-dom';

const UseDeferredValueHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useDeferredValue Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseDeferredValueHook };
