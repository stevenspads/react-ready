import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <Link to="/">React Ready</Link>
      </h1>
      <p>
        <a
          href="https://lumin8media.com/books/react-ready-learn-modern-react-with-typescript"
          target="_blank"
          rel="noreferrer"
        >
          Get the book &rarr;
        </a>
      </p>
    </header>
  );
};

export { Header };
