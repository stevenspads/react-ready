import { Outlet } from 'react-router-dom';

const Iterating = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>Iterating</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { Iterating };
