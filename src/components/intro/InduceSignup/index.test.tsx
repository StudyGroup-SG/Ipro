import React from 'react';
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter } from 'react-router-dom';

import { render, screen, fireEvent } from '@testing-library/react';

import InduceSignup from '.';

describe('<InduceSignup/> component test', () => {
  it('회원가입을 유도할 수 있는 문구를 렌더링해야 합니다.', () => {
    const title = 'Try Our Service by Signing up in 10 Seconds!';
    const description = 'Get user feedback with Ipro';

    render(
      <MemoryRouter>
        <InduceSignup />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(title);
    expect(screen.queryByText(description)).toBeInTheDocument();
  });

  it('"GO"를 클릭하게 되면 회원가입 페이지로 이동해야 합니다.', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <InduceSignup />
      </Router>,
    );

    fireEvent.click(screen.getByText('GO'));

    expect(history.location.pathname).toBe('/signup');
  });
});
