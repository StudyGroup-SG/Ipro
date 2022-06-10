import { css, SerializedStyles, Theme } from '@emotion/react';

export const sidebarStyle = css`
  display: inline-flex;
  height: 100%;
`;

export const sidebarContentStyle = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.colorPrimary};
  color: ${theme.colorWhite};
  width: 250px;
  box-sizing: border-box;
  padding: 12px 9px;
  display: flex;
  flex-direction: column;

  > .head {
    font-size: 50px;
    font-family: ${theme.fontCodingBold};
    text-align: center;

    height: 160px;
  }

  > .body {
    height: 100%;
  }
`;
