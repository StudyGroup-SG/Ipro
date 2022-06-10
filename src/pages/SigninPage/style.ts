import { SerializedStyles, Theme, css } from '@emotion/react';

import {
  footerStyle as signupFooterStyle,
  headerStyle as signupHeaderStyle,
  layoutStyle as signupLayoutStyle,
} from '../SignupPage/style';

export const layoutStyle = (theme: Theme): SerializedStyles => css`
  ${signupLayoutStyle(theme)};
  background: linear-gradient(
    to top,
    rgba(0, 83, 191, 0.1) 50%,
    ${theme.colorBg} 50%
  );
`;

export const headerStyle = css`
  ${signupHeaderStyle}
`;

export const footerStyle = (theme: Theme): SerializedStyles => css`
  ${signupFooterStyle(theme)};
`;
