import React from 'react';

import { render, screen } from '@testing-library/react';

import Jumbotron from '.';

it('Jumbotron should render title & desc text received as props', () => {
  render(<Jumbotron title="Test" descList={['desciption test']} />);
  expect(screen.getByRole('heading')).toHaveTextContent('Test to Ipro');
  expect(screen.queryByText('desciption test')).toBeInTheDocument();
});
