import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Uri from '@/constants/uri';

import { yellowLineButtonStyle, yellowFullButtonStyle } from '../style';

const PublicNavbar: FC = () => {
  return (
    <>
      <Link to={Uri.signin}>
        <span css={yellowLineButtonStyle}>Sign in</span>
      </Link>
      <Link to={Uri.signup}>
        <span css={yellowFullButtonStyle}>Register</span>
      </Link>
    </>
  );
};

export default PublicNavbar;
