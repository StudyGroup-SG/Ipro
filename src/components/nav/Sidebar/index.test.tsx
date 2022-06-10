import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import Sidebar from '.';

describe('<Sidebar/> component test', () => {
  it('자식 요소들을 렌더링 해야 합니다.', () => {
    render(
      <MemoryRouter>
        <Sidebar>Sidebar Contents</Sidebar>
      </MemoryRouter>,
    );

    expect(screen.queryByText('Sidebar Contents')).toBeInTheDocument();
  });

  it('Logo 아이콘을 클릭했을 때 service 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <Sidebar />
      </Router>,
    );

    fireEvent.click(screen.getByAltText('Logo'));

    expect(history.location.pathname).toBe('/service');
  });

  it('Chat 아이콘을 클릭했을 때 feedback messages 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <Sidebar />
      </Router>,
    );

    fireEvent.click(screen.getByAltText('Feedback Messages'));

    expect(history.location.pathname).toBe('/feedback');
  });

  it('Setting 아이콘을 클릭했을 때 setting 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <Sidebar />
      </Router>,
    );

    fireEvent.click(screen.getByAltText('Settings'));

    expect(history.location.pathname).toBe('/service-edit');
  });

  it('해당 페이지로 이동했을 때 적절한 제목을 렌더링해야 합니다.', () => {
    const DEFAULT_HEADING_TITLE = 'Ipro';

    render(
      <MemoryRouter initialEntries={['/other']}>
        <Sidebar />
      </MemoryRouter>,
    );

    expect(screen.queryByRole('heading')).toHaveTextContent(
      DEFAULT_HEADING_TITLE,
    );

    fireEvent.click(screen.getByAltText('Feedback Messages'));
    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      'Feedback Messages',
    );

    fireEvent.click(screen.getByAltText('Settings'));
    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      'Settings',
    );
  });
});
