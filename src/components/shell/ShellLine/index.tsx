import React, { ReactElement } from 'react';

import {
  defaultMessageStyle,
  defaultTypeStyle,
  errorMessageStyle,
  errorTypeStyle,
  inputStyle,
  readLineMessageStyle,
  shellLineContainerStyle,
} from './style';

export enum ShellLineType {
  Question = 'question',
  Config = 'config',
  Error = 'error',
  Default = 'default',
}

export type ShellLineProps = {
  type: ShellLineType;
  message: string;
  maxLength?: number;
  disabled?: boolean;
};

// FIXME: 현재 ShellReadLine은 id 중복 문제가 발생할 수 있습니다.
// 때문에, 추후 `nanoid` 등을 사용해 독립적인 id를 부여해야 합니다.
const ShellReadLine = ({
  type,
  message,
  disabled,
  maxLength,
}: ShellLineProps) => {
  const isPassword = message === 'password';

  return (
    <>
      <span css={defaultTypeStyle}>{type}</span>
      <label htmlFor="readline" css={readLineMessageStyle}>
        {`${message}:`}
      </label>
      <span css={inputStyle}>
        <input
          type={isPassword ? 'password' : 'text'}
          maxLength={maxLength}
          disabled={disabled}
          autoComplete="off"
          id="readline"
        />
      </span>
    </>
  );
};

const ShellPrintLine = ({
  type,
  message,
  disabled,
  maxLength,
}: ShellLineProps) => {
  const isError = type === ShellLineType.Error;
  return (
    <>
      {isError && <span css={errorTypeStyle}>ERROR: </span>}
      <label
        htmlFor="printline"
        css={isError ? errorMessageStyle : defaultMessageStyle}
      >
        {message}
      </label>
      {!isError && (
        <span css={inputStyle}>
          <input
            type="text"
            maxLength={maxLength}
            disabled={disabled}
            id="printline"
          />
        </span>
      )}
    </>
  );
};

const ShellLine = ({
  type,
  message,
  maxLength,
  disabled,
}: ShellLineProps): ReactElement => {
  const isReadLine = [ShellLineType.Question, ShellLineType.Config].includes(
    type,
  );

  return (
    <div css={shellLineContainerStyle}>
      {isReadLine ? (
        <ShellReadLine
          type={type}
          message={message}
          disabled={disabled}
          maxLength={maxLength}
        />
      ) : (
        <ShellPrintLine
          type={type}
          message={message}
          disabled={disabled}
          maxLength={0}
        />
      )}
    </div>
  );
};

export default ShellLine;
