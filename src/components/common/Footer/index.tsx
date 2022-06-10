import React, { FC } from 'react';

import Logo from '../Logo';

import { footerStyle } from './style';

const Footer: FC = () => {
  return (
    <footer css={footerStyle}>
      <hr />
      <Logo onlyImg width="24px" />
      <p>© 2022 Ipro.</p>
    </footer>
  );
};

export default Footer;
