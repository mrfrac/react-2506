import { Footer } from '../footer/Footer.jsx';
import { Header } from '../header/Header.jsx';
import styles from './layout.module.css';
import { Outlet } from 'react-router';
import { ScrollProgress } from '../scroll-progress/ScrollProgress.jsx';
import { Cart } from '../cart/Cart.jsx';

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
