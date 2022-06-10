import React from 'react';

import { render, screen } from '@testing-library/react';

import Footer from '.';

it('should render footer text', () => {
  render(<Footer />);
  expect(screen.queryByText('© 2022 Ipro.')).toBeInTheDocument();
});
