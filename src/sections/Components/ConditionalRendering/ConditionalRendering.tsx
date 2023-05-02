import { Outlet } from 'react-router-dom';

const ConditionalRendering = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>Conditional rendering</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { ConditionalRendering };
