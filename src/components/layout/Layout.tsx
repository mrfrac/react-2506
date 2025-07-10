import { Footer } from '../footer/Footer.tsx';
import { Header } from '../header/Header.tsx';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
