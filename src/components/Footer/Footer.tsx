import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p>
        &copy; React Ready. A{' '}
        <a href="https://lumin8media.com" target="_blank" rel="noreferrer">
          Lumin8 Media
        </a>{' '}
        production.{' '}
        <a
          href="https://lumin8media.com/books/react-ready-learn-modern-react-with-typescript"
          target="_blank"
          rel="noreferrer"
        >
          Get the book
        </a>
        .
      </p>
    </footer>
  );
};

export { Footer };
