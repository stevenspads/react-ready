import { Outlet } from 'react-router-dom';

const Memo = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>memo</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { Memo };
