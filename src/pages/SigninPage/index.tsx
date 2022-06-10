import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import { useSetUserState } from '@/atoms/userState';
import Jumbotron from '@/components/common/Jumbotron';
import Logo from '@/components/common/Logo';
import Shell from '@/components/shell/Shell';
import { NETWORK_ERROR, UNEXPECTED_ERROR, loginError } from '@/constants/error';
import Uri from '@/constants/uri';
import { LoginRequestBody } from '@/types';

import { footerStyle, headerStyle, layoutStyle } from './style';

const SigninPage: FC = () => {
  const setUserState = useSetUserState();
  const { push } = useHistory();

  const requestSignin = async (body: LoginRequestBody) => {
    try {
      await authApi.login(body);

      setUserState((prev) => ({ ...prev, userId: body.userId }));

      push(Uri.service);
    } catch (error) {
      setUserState(null);

      if (!error.response) throw new Error(NETWORK_ERROR);

      const { status } = error.response;
      if (loginError[status]) throw new Error(loginError[status]);

      throw new Error(UNEXPECTED_ERROR);
    }
  };

  return (
    <div css={layoutStyle}>
      <header css={headerStyle}>
        <Link to={Uri.home}>
          <Logo onlyImg width="70px" />
          <Jumbotron title="Sign in" />
        </Link>
      </header>
      <main>
        <Shell
          type="signin"
          requestWhenQueryDone={requestSignin}
          width="789px"
          height="247px"
        />
      </main>
      <footer css={footerStyle}>
        <p>
          Don’t have an account?
          <Link to={Uri.signup}>Sign Up</Link>
        </p>
      </footer>
    </div>
  );
};

export default SigninPage;
