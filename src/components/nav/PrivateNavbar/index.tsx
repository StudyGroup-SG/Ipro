import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Uri from '@/constants/uri';

import { yellowLineButtonStyle, yellowFullButtonStyle } from '../style';

type PrivateNavbarProps = {
  logoutHandler?: () => void;
};

const PrivateNavbar: FC<PrivateNavbarProps> = ({ logoutHandler }) => {
  return (
    <>
      <Link to={Uri.service}>
        <span css={yellowLineButtonStyle}>Service</span>
      </Link>
      <button css={yellowFullButtonStyle} type="button" onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

PrivateNavbar.defaultProps = {
  logoutHandler: null,
};

export default PrivateNavbar;
