import React from 'react';

import { render, screen } from '@testing-library/react';
import IntroMain from '.';

describe('<IntroMain/> component test', () => {
  it('서비스 소개 제목을 렌더링해야 합니다.', () => {
    const titleContent = 'Talk to Ipro';

    render(<IntroMain />);

    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      titleContent,
    );
  });

  it('서비스 소개 내용을 렌더링해야 합니다.', () => {
    const descList = [
      'Thinking about project feedback?',
      'Here Ipro will listen.',
    ];

    render(<IntroMain />);

    descList.forEach((desc) => {
      expect(screen.queryByText(desc)).toBeInTheDocument();
    });
  });

  // @TODO Home 메인 폼에 대한 테스트 케이스 추가가 필요합니다!
});
