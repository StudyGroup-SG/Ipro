import { SerializedStyles, Theme, css } from '@emotion/react';

export const layoutStyle = (theme: Theme): SerializedStyles => css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colorBg};

  main {
    flex: 1;
  }
`;
