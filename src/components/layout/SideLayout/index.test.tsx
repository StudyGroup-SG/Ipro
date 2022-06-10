import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import SideLayout from '.';

describe('<SideLayout/> component test', () => {
  it('자식 요소들을 main 태그 밑에 렌더링 해야 합니다.', () => {
    render(
      <MemoryRouter>
        <SideLayout>Main Contents</SideLayout>
      </MemoryRouter>,
    );
    expect(screen.getByRole('main')).toHaveTextContent('Main Contents');
  });

  it('render prop으로 받은 요소를 사이드바 밑에 렌더링해야 합니다.', () => {
    render(
      <MemoryRouter>
        <SideLayout renderSidebar={() => <div>Sidebar Contents</div>}>
          Main Contents
        </SideLayout>
      </MemoryRouter>,
    );
    expect(screen.queryByText('Sidebar Contents')).toBeInTheDocument();
  });

  it('Logo 아이콘을 클릭했을 때 service 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <Router history={history}>
        <SideLayout>Main Contents</SideLayout>
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
        <SideLayout>Main Contents</SideLayout>
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
        <SideLayout>Main Contents</SideLayout>
      </Router>,
    );

    fireEvent.click(screen.getByAltText('Settings'));

    expect(history.location.pathname).toBe('/service-edit');
  });
});
