import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const Forms = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Forms</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { Forms };
