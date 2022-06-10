import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import HomePage from '.';

it('should render proper Jumbotron', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </RecoilRoot>,
  );
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Talk to Ipro',
  );
  expect(
    screen.queryByText('Thinking about project feedback?'),
  ).toBeInTheDocument();
  expect(screen.queryByText('Here Ipro will listen.')).toBeInTheDocument();
});
