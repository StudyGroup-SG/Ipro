import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import NotFoundPage from '.';

it('should render proper Jumbotron', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    </RecoilRoot>,
  );
  expect(screen.getByRole('heading')).toHaveTextContent('Back to Ipro');
});

it('should render NotFoundPage contents', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    </RecoilRoot>,
  );
  expect(
    screen.getByRole('img', { name: 'page-not-found' }),
  ).toBeInTheDocument();
  expect(screen.queryByText('There are no resources')).toBeInTheDocument();
});
