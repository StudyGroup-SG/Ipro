import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import PrivateNavbar from '.';

describe('<PrivateNavbar/> component test', () => {
  it('Service 링크를 클릭했을 때 service 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <PrivateNavbar />
      </Router>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Service' }));

    expect(history.location.pathname).toBe('/service');
  });

  it('Logout 버튼을 클릭했을 때 prop으로 전달한 로그아웃 핸들러가 동작해야 합니다.', () => {
    let isLoggedOut = false;

    const logoutHandler = () => {
      isLoggedOut = true;
    };

    render(
      <MemoryRouter>
        <PrivateNavbar logoutHandler={logoutHandler} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Logout' }));

    expect(isLoggedOut).toBeTruthy();
  });
});
