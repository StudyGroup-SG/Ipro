import React from 'react';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import App from './App';

it(`App rendering test`, () => {
  render(
    <RecoilRoot>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </RecoilRoot>,
  );
});
