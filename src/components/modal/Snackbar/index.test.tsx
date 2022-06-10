import React from 'react';

import { render, screen } from '@testing-library/react';

import Snackbar from '.';

describe('<Snackbar/> component test', () => {
  it('Snackbar 모달을 열면 prop으로 받은 메시지를 렌더링해야 합니다.', () => {
    const message = 'message';
    render(<Snackbar isOpen message={message} />);
    expect(screen.queryByText(message)).toBeInTheDocument();
  });

  it('Snackbar 모달을 닫으면 메시지를 렌더링하지 않아야 합니다.', async () => {
    const message = 'message';
    render(<Snackbar isOpen={false} message={message} />);
    expect(screen.queryByText(message)).toBeNull();
  });
});
