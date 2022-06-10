import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SigninPage from '.';

describe('SigninPage 테스트', () => {
  const signupPageContainer = (
    <MemoryRouter>
      <SigninPage />
    </MemoryRouter>
  );

  it('로그인 문구를 렌더링해야 합니다.', () => {
    render(signupPageContainer);
    expect(screen.getByRole('heading')).toHaveTextContent('Sign in to Ipro');
  });

  it('로고를 렌더링해야 합니다.', () => {
    render(signupPageContainer);
    expect(screen.getByAltText('logo'));
  });

  it('footer에 "Don’t have an account?" 안내문을 렌더링해야 합니다.', () => {
    render(signupPageContainer);
    expect(screen.queryByText('Don’t have an account?')).toBeInTheDocument();
  });

  it('Sign Up 을 클릭하면 회원가입 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SigninPage />
      </Router>,
    );

    userEvent.click(screen.getByText('Sign Up'));
    expect(history.location.pathname).toBe('/signup');
  });
});
