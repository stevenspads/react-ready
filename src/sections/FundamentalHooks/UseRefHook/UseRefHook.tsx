import { Outlet } from 'react-router-dom';

const UseRefHook = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>The useRef Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseRefHook };
