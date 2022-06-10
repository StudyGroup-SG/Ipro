import { createMemoryHistory } from 'history';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignupPage from '.';

describe('SignupPage 테스트', () => {
  const signupPageContainer = (
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  );

  it('회원가입 유도 문구를 렌더링해야 합니다.', () => {
    render(signupPageContainer);
    expect(screen.getByRole('heading')).toHaveTextContent('Join to Ipro');
  });

  it('로고를 렌더링해야 합니다.', () => {
    render(signupPageContainer);
    expect(screen.getByAltText('logo'));
  });

  it('footer에 "Already have an account?" 안내문을 렌더링해야 합니다.', () => {
    render(signupPageContainer);
    expect(screen.queryByText('Already have an account?')).toBeInTheDocument();
  });

  it('Sign In 을 클릭하면 로그인 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignupPage />
      </Router>,
    );

    userEvent.click(screen.getByText('Sign In'));
    expect(history.location.pathname).toBe('/signin');
  });
});
