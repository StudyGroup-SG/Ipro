import { SerializedStyles, Theme, css } from '@emotion/react';

export const sideLayoutStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${theme.colorBg};
`;

export const sideLayoutContentStyle = css`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  footer {
    margin-top: auto;
  }
`;

export const sidebarContentStyle = css`
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  height: 100%;
  box-sizing: border-box;

  > .footer {
    margin-top: auto;
  }
`;
