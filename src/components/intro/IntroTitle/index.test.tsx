import React from 'react';

import { render, screen } from '@testing-library/react';

import IntroTitle from '.';

describe('<IntroTitle/> component test', () => {
  it('title prop이 없을 경우 heading 요소를 렌더링 하지 않아야 합니다.', () => {
    render(<IntroTitle />);

    expect(screen.queryByRole('heading')).toBeNull();
  });

  it('prop으로 넘겨준 title 문자열을 heading으로 렌더링해야 합니다.', () => {
    const titleContent = 'title';

    render(<IntroTitle title={titleContent} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      titleContent,
    );
  });

  it('prop으로 넘겨준 title 리스트들을 heading으로 렌더링해야 합니다.', () => {
    const titleList = ['title-line1', 'title-line2'];
    const titleContent = titleList.reduce((acc, cur) => acc + cur, '');

    render(<IntroTitle title={titleList} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      titleContent,
    );
  });

  it('prop으로 넘겨준 desc 리스트들을 렌더링해야 합니다.', () => {
    const descList = ['desc-line1', 'desc-line2'];

    render(<IntroTitle descList={descList} />);

    descList.forEach((desc) => {
      expect(screen.queryByText(desc)).toBeInTheDocument();
    });
  });
});
