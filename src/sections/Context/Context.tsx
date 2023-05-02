import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const Context = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Context</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { Context };
