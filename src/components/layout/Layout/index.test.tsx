import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { RecoilRoot } from 'recoil';
import Layout from '.';

it('Layout component should render children under the main element', () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <Layout>Layout Test</Layout>
      </MemoryRouter>
    </RecoilRoot>,
  );
  expect(screen.getByRole('main')).toHaveTextContent('Layout Test');
});
