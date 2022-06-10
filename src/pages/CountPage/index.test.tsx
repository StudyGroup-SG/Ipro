import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { render, screen } from '@testing-library/react';

import CountPage from '.';

it('should render "Count"', () => {
  render(
    <MemoryRouter>
      <RecoilRoot>
        <CountPage />
      </RecoilRoot>
    </MemoryRouter>,
  );
  screen.getByText('Count');
});
