import { SerializedStyles, Theme, css } from '@emotion/react';

export const wrapperStyle = css`
  margin: 50px 0;
`;

export const headerStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCodingBold};
  color: ${theme.colorPrimary};
  font-size: 26px;
  margin: 30px 0;
`;

export const listStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const emptyStyle = (theme: Theme): SerializedStyles => css`
  text-align: center;

  img {
    width: 320px;
  }

  p {
    font-family: ${theme.fontCoding};
    font-size: 20px;
    color: ${theme.colorPrimary};
    margin-top: 5px;
  }
`;
