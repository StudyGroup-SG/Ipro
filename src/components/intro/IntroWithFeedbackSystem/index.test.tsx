import React from 'react';

import { render, screen } from '@testing-library/react';

import IntroWithFeedbackSystem from '.';

describe('<IntroWithFeedbackSystem/> component test', () => {
  it('서비스 소개 제목을 렌더링해야 합니다.', () => {
    const titleList = ['Check a Lot of Feedback', 'at Once'];
    const titleContent = titleList.reduce((acc, cur) => acc + cur, '');

    render(<IntroWithFeedbackSystem />);

    expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent(
      titleContent,
    );
  });

  it('서비스 소개 내용을 렌더링해야 합니다.', () => {
    const desc = 'Ipro helps you communicate easily with users.';

    render(<IntroWithFeedbackSystem />);

    expect(screen.queryByText(desc)).toBeInTheDocument();
  });

  it('Feedback System 이미지를 렌더링해야 합니다.', () => {
    render(<IntroWithFeedbackSystem />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'feedback system');
  });
});
