import React, { FC } from 'react';

import logoImg from '@/assets/images/logo.png';

import { logoStyle } from './style';

type LogoProps = {
  onlyImg?: boolean;
  width?: string;
};

const Logo: FC<LogoProps> = ({ onlyImg, width }) => {
  return (
    <div css={logoStyle}>
      <img src={logoImg} alt="logo" width={width} />
      {!onlyImg && <span>Ipro</span>}
    </div>
  );
};

Logo.defaultProps = {
  onlyImg: false,
  width: '32px',
};

export default Logo;
