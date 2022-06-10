import React from 'react';

import { render, screen } from '@testing-library/react';

import ShellLine, { ShellLineProps, ShellLineType } from './index';

describe('ShellLine Component', () => {
  const SHELL_SUCCESS_MESSAGE = 'Congrats! service has been added to Ipro.';

  const SHELL_ERROR_USER_ACCESS_DENIED = 'Access denied';

  it(`question, config 타입의 ShellLine은 message를 렌더링합니다. input='text'도 함께 출력합니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Config,
      message: 'username',
    };

    const { container } = render(
      <ShellLine type={props.type} message={props.message} />,
    );

    expect(container).toHaveTextContent('config');
    expect(container).toHaveTextContent('username:');
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });
  it(`message가 password일 경우, <input type='password'/> 를 렌더링합니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Question,
      message: 'password',
    };

    const { container } = render(
      <ShellLine type={props.type} message={props.message} />,
    );

    expect(container).toHaveTextContent('question');
    expect(container).toHaveTextContent('password:');
    expect(screen.getByLabelText('password:')).toHaveAttribute(
      'type',
      'password',
    );
  });
  it(`error type의 ShellLine은 error message를 출력합니다. input은 갖지 않습니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Error,
      message: SHELL_ERROR_USER_ACCESS_DENIED,
    };

    const { container } = render(
      <ShellLine type={props.type} message={props.message} />,
    );

    expect(container).toHaveTextContent(
      `ERROR: ${SHELL_ERROR_USER_ACCESS_DENIED}`,
    );
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
  it(`default type의 ShellLine은 maxLength가 0인 input을 렌더링합니다.`, () => {
    const props: ShellLineProps = {
      type: ShellLineType.Default,
      message: SHELL_SUCCESS_MESSAGE,
    };

    const { container } = render(
      <ShellLine type={props.type} message={props.message} />,
    );

    expect(container).toHaveTextContent(`${SHELL_SUCCESS_MESSAGE}`);
    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '0');
  });
});
