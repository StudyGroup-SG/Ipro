import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import ServicePage from '.';

it('should render ServicePage contents', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <ServicePage />
      </MemoryRouter>
    </RecoilRoot>,
  );

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Add to Ipro',
  );
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
    'Services',
  );
});
