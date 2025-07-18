import type { ReactNode } from 'react';
import { Footer } from '../footer/Footer.tsx';
import { Header } from '../header/Header.tsx';
import styles from './layout.module.css';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
