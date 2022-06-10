import React from 'react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import PrivateRoute from '.';

describe('<PrivateRoute/> component test', () => {
  it('접근 조건이 false일 때 접근할 경우 redirect 되어야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/test');

    render(
      <Router history={history}>
        <PrivateRoute
          path="/test"
          component={() => <h1>Hello</h1>}
          isAccessible={false}
        />
      </Router>,
    );

    expect(history.location.pathname).toBe('/');
  });

  it('접근 조건이 false일 때 접근할 경우 redirect 되는 url을 지정할 수 있어야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/test');

    render(
      <Router history={history}>
        <PrivateRoute
          path="/test"
          component={() => <h1>Hello</h1>}
          isAccessible={false}
          redirectUrl="/redirect"
        />
      </Router>,
    );

    expect(history.location.pathname).toBe('/redirect');
  });

  it('접근 조건이 true 때 접근할 경우 prop으로 받은 컴포넌트를 렌더링해야 합니다.', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <PrivateRoute
          path="/test"
          component={() => <h1>Hello</h1>}
          isAccessible
        />
      </MemoryRouter>,
    );

    expect(screen.queryByText('Hello')).toBeInTheDocument();
  });

  it('접근 조건이 false 때 접근할 경우 prop으로 받은 컴포넌트를 렌더링하지 않아야 합니다.', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <PrivateRoute
          path="/test"
          component={() => <h1>Hello</h1>}
          isAccessible={false}
        />
      </MemoryRouter>,
    );

    expect(screen.queryByText('Hello')).toBeNull();
  });

  it('다른 URL로 접근할 경우 prop으로 받은 컴포넌트를 렌더링하지 않아야 합니다.', () => {
    render(
      <MemoryRouter initialEntries={['/other']}>
        <PrivateRoute
          path="/test"
          component={() => <h1>Hello</h1>}
          isAccessible
        />
      </MemoryRouter>,
    );

    expect(screen.queryByText('Hello')).toBeNull();
  });
});
