import React, { FC } from 'react';

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

import { layoutStyle } from './style';

const Layout: FC = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
