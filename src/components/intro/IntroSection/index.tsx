import React, { FC } from 'react';

import { introSectionStyle } from './style';

const IntroSection: FC = ({ children }) => {
  return <section css={introSectionStyle}>{children}</section>;
};

export default IntroSection;
