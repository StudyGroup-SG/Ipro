import React from 'react';

import { render, screen } from '@testing-library/react';

import IntroSection from '.';

describe('<IntroSection/> component test', () => {
  it('children을 렌더링해야 합니다.', () => {
    const childrenContent = 'Children';
    render(
      <IntroSection>
        <div>{childrenContent}</div>
      </IntroSection>,
    );
    expect(screen.queryByText(childrenContent)).toBeInTheDocument();
  });
});
