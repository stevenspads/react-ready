import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const Components = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Components</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { Components };
