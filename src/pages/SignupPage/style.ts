import { SerializedStyles, Theme, css } from '@emotion/react';

export const layoutStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 83, 191, 0.1) 50%,
    ${theme.colorBg} 50%
  );
`;

export const headerStyle = css`
  height: 160px;
  margin-bottom: 31px;
  display: flex;
  align-items: space-between;

  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const footerStyle = (theme: Theme): SerializedStyles => css`
  margin: 26px 0 60px;
  color: ${theme.colorGray3};
  font-family: ${theme.fontCoding};
  font-size: 22px;
  line-height: 38px;

  a {
    text-decoration-line: underline;
    color: ${theme.colorPrimary};
  }
`;
