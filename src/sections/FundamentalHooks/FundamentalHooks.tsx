import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const FundamentalHooks = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Fundamental Hooks</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { FundamentalHooks };
