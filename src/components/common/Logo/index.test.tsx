import React from 'react';

import { render, screen } from '@testing-library/react';

import Logo from '.';

it('Logo without props should render the text, and the image width should be 32px', () => {
  render(<Logo />);
  expect(screen.queryByText('Ipro')).toBeInTheDocument();
  expect(screen.getByRole('img')).toHaveAttribute('width', '32px');
});

it('Logo with onlyImg prop should not render text', () => {
  render(<Logo onlyImg />);
  expect(screen.queryByText('Ipro')).not.toBeInTheDocument();
});

it('Logo with width prop should have a given image width', () => {
  render(<Logo width="16px" />);
  expect(screen.getByRole('img')).toHaveAttribute('width', '16px');
});
