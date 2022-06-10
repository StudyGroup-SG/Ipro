import { css } from '@emotion/react';

import zIndexes from '@/styles/zIndexes';

export const snackbarWrapperStyle = css`
  position: fixed;
  left: 50%;
  bottom: 80px;
  padding: 13px 30px;
  min-width: 100px;
  border-radius: 40px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  transition: 0.6s;
`;

export const snackbarHideStyle = css`
  opacity: 0;
  transform: translate(-50%, 0);
  z-index: -1;
`;

export const snackbarShowStyle = css`
  opacity: 1;
  transform: translate(-50%, -40px);
  z-index: ${zIndexes.snackbar};
`;
