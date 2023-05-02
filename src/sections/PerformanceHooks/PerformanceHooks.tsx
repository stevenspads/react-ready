import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const PerformanceHooks = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Performance Hooks</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { PerformanceHooks };
