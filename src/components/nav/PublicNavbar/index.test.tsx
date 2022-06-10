import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import PublicNavbar from '.';

describe('<PublicNavbar/> component test', () => {
  it('sign in 링크를 클릭했을 때 sign in 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <PublicNavbar />
      </Router>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Sign in' }));

    expect(history.location.pathname).toBe('/signin');
  });

  it('register 링크를 클릭했을 때 sign up 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <PublicNavbar />
      </Router>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Register' }));

    expect(history.location.pathname).toBe('/signup');
  });
});
