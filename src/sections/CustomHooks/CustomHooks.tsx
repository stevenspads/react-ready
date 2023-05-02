import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const CustomHooks = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Custom Hooks</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { CustomHooks };
