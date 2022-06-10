import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import ConfirmModal from '.';

describe('<ConfirmModal/> component test', () => {
  it('모달이 열렸을 때, prop으로 받은 메시지를 렌더링해야 합니다.', () => {
    const message = 'message';
    render(<ConfirmModal isOpen message={message} />);
    expect(screen.queryByText(message)).toBeInTheDocument();
  });

  it('모달이 열리지 않으면 렌더링되지 않아야 합니다.', () => {
    const message = 'message';
    render(<ConfirmModal isOpen={false} message={message} />);
    expect(screen.queryByText(message)).toBeNull();
  });

  it('확인 버튼 내용을 바꿀 수 있어야 합니다.', () => {
    const acceptButtonContent = 'diff-accept-button';
    render(<ConfirmModal isOpen acceptContent={acceptButtonContent} />);
    expect(screen.queryByText(acceptButtonContent)).toBeInTheDocument();
  });

  it('취소 버튼 내용을 바꿀 수 있어야 합니다.', () => {
    const cancelButtonContent = 'diff-cancel-button';
    render(<ConfirmModal isOpen cancelContent={cancelButtonContent} />);
    expect(screen.queryByText(cancelButtonContent)).toBeInTheDocument();
  });

  it('확인 버튼 클릭 시 해당 핸들러가 동작해야 합니다.', () => {
    const acceptButtonContent = 'accept-button';
    let isCalledAcceptHandler = false;

    render(
      <ConfirmModal
        isOpen
        acceptContent={acceptButtonContent}
        acceptHandler={() => {
          isCalledAcceptHandler = true;
        }}
      />,
    );

    const acceptButton = screen.getByRole('button', {
      name: acceptButtonContent,
    });

    fireEvent.click(acceptButton);

    expect(isCalledAcceptHandler).toBe(true);
  });

  it('취소 버튼 클릭 시 해당 핸들러가 동작해야 합니다.', () => {
    const cancelButtonContent = 'cancel-button';
    let isCalledCancelHandler = false;

    render(
      <ConfirmModal
        isOpen
        acceptContent={cancelButtonContent}
        acceptHandler={() => {
          isCalledCancelHandler = true;
        }}
      />,
    );

    const cancelButton = screen.getByRole('button', {
      name: cancelButtonContent,
    });

    fireEvent.click(cancelButton);

    expect(isCalledCancelHandler).toBe(true);
  });

  it('모달 내용이 아닌 다른 곳을 클릭할 경우, close handler가 동작해야 합니다.', () => {
    const otherElementContent = 'other';
    let isCalledCloseHandler = false;

    render(
      <>
        <div>{otherElementContent}</div>
        <ConfirmModal
          isOpen
          closeModal={() => {
            isCalledCloseHandler = true;
          }}
        />
      </>,
    );

    const otherElement = screen.getByText(otherElementContent);

    fireEvent.click(otherElement);

    expect(isCalledCloseHandler).toBe(true);
  });
});
