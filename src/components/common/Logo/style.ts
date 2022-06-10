import { SerializedStyles, Theme, css } from '@emotion/react';

export const logoStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;

  span {
    font-family: ${theme.fontCodingBold};
    font-size: 20px;
    color: ${theme.colorPrimary};
    margin-left: 6px;
  }
`;
