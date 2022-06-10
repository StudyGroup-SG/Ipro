import React from 'react';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createMemoryHistory } from 'history';

import { render, screen, fireEvent } from '@testing-library/react';

import Navbar from '.';

describe('<Navbar/> component test', () => {
  it('Logo를 클릭했을 때 홈으로 이동해야 합니다.', () => {
    const history = createMemoryHistory();
    history.replace('/other');

    render(
      <RecoilRoot>
        <Router history={history}>
          <Navbar />
        </Router>
      </RecoilRoot>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'logo Ipro' }));

    expect(history.location.pathname).toBe('/');
  });
});
