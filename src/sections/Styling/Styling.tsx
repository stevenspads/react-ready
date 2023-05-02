import { Link, Outlet } from 'react-router-dom';
import { Layout } from '../../components';

const Styling = () => {
  return (
    <Layout>
      <header className="ExampleHeader">
        <h2>Styling</h2>
        <Link to="/">&larr; Back home</Link>
      </header>

      <Outlet />
    </Layout>
  );
};

export { Styling };
