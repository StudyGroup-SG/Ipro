import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { userApi } from '@/apis';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import Shell from '@/components/shell/Shell';
import {
  NETWORK_ERROR,
  UNEXPECTED_ERROR,
  signupError,
} from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SignupPage: FC = () => {
  const requestSignup = async (body: LoginRequestBody) => {
    try {
      await userApi.signup(body);
    } catch (error) {
      if (!error.response) throw new Error(NETWORK_ERROR);

      const { status } = error.response;
      if (signupError[status]) throw new Error(signupError[status]);

      throw new Error(UNEXPECTED_ERROR);
    }
  };

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Link to={Uri.home}>
          <Logo onlyImg width="70px" />
          <Jumbotron title="Join" />
        </Link>
      </header>
      <main>
        <Shell
          type="signup"
          requestWhenQueryDone={requestSignup}
          width="789px"
          height="247px"
        />
      </main>
      <footer css={footerStyle}>
        <p>
          Already have an account?
          <Link to={Uri.signin}>Sign In</Link>
        </p>
      </footer>
    </div>
  );
};

export default SignupPage;
