import { SerializedStyles, Theme, css } from '@emotion/react';

export const notFoundPageStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;

  img {
    width: 300px;
  }

  p {
    font-family: ${theme.fontCoding};
    font-size: 20px;
    color: ${theme.colorPrimary};
    margin-top: 5px;
  }
`;
