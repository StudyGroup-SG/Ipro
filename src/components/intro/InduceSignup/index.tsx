import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import IntroSection from '@/components/intro/IntroSection';
import {
  descriptionStyle,
  goSignupStyle,
  titleStyle,
  wrapperStyle,
} from './style';
import Uri from '@/constants/uri';

const InduceSignup: FC = () => {
  return (
    <IntroSection>
      <div css={wrapperStyle}>
        <div>
          <p css={descriptionStyle}>Get user feedback with Ipro</p>
          <h2 css={titleStyle}>Try Our Service by Signing up in 10 Seconds!</h2>
        </div>
        <div>
          <Link to={Uri.signup}>
            <button type="button" css={goSignupStyle}>
              GO
            </button>
          </Link>
        </div>
      </div>
    </IntroSection>
  );
};

export default InduceSignup;
