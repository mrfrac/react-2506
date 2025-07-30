import { Footer } from '../footer/Footer.tsx';
import { Header } from '../header/Header.tsx';
import styles from './layout.module.css';
import { Outlet } from 'react-router';
import { ScrollProgress } from '../scroll-progress/ScrollProgress.tsx';
import { Cart } from '../cart/Cart.tsx';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <ScrollProgress />
      <Header />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
};
