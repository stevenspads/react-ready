import { Outlet } from 'react-router-dom';

const Profiling = () => {
  return (
    <div>
      <header>
        <h3>Profiling</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { Profiling };
