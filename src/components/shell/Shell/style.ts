import { SerializedStyles, Theme, css } from '@emotion/react';

type ShellContainerStyleProps = {
  width?: string;
  height?: string;
};

export const shellContainerStyle = ({
  width,
  height,
}: ShellContainerStyleProps): SerializedStyles => css`
  outline: none;
  width: ${width};
  height: ${height};
  max-width: 100%;
  margin: 0 auto;
`;

export const formStyle = (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 28px 30px;
  margin: 0 auto;
  box-shadow: 1px 3px 20px 3px rgba(0, 83, 191, 0.1);
  border-radius: 12px;
  font-family: ${theme.fontCoding};
  color: ${theme.colorGray2};
  background-color: #fff;
  font-size: 22px;
  line-height: 32px;

  h1 {
    margin: 0;
    font-size: 30px;
  }

  p {
    margin: 0;
  }
`;

export const fieldsetStyle = css`
  all: unset;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  legend {
    display: none;
  }
`;
