import type { ReactNode } from 'react';
import { Footer } from '../footer/Footer.tsx';
import { Header } from '../header/Header.tsx';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ marginBottom: '52px' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
