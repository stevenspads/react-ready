import { Outlet } from 'react-router-dom';

const ChildrenSlots = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>Children prop & slots</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { ChildrenSlots };
