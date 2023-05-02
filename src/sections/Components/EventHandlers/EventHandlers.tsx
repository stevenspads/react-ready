import { Outlet } from 'react-router-dom';

const EventHandlers = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>Event handlers</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { EventHandlers };
