import { SerializedStyles, Theme, css } from '@emotion/react';

export const countValueStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorPrimary};
`;
