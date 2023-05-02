import { Outlet } from 'react-router-dom';

const UseEffectMisuse = () => {
  return (
    <div>
      <header className="ExampleHeader">
        <h3>Misusing the useEffect Hook</h3>
      </header>

      <Outlet />
    </div>
  );
};

export { UseEffectMisuse };
