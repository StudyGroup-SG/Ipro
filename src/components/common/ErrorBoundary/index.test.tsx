import React from 'react';

import { render, screen } from '@testing-library/react';

import ErrorBoundary from '.';

describe('<ErrorBoundary />', () => {
  const Throws = () => {
    throw new Error('Oh no!');
  };

  it('should display an ErrorMessage if wrapped component throws', () => {
    render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>,
    );

    expect(screen.queryByText('Something went wrong.')).toBeInTheDocument();
  });
});
