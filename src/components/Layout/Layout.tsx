import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.Main}>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
