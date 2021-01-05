import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { useRouter } from 'next/router';

function Layout({ children }) {
  const router = useRouter().pathname;
  return (
    <div className={`layout${(router === '/') ? ' index' : ''}`}>

      <Header />
      <main>
        {children}
      </main>
      <Footer />

    </div>
  );
}

export default Layout;
