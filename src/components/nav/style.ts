import { SerializedStyles, Theme, css } from '@emotion/react';

export const navButtonStyle = (theme: Theme): SerializedStyles => css`
  padding: 7px 16px;
  font-family: ${theme.fontCodingBold};
  font-size: 15px;
  border-radius: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border: 1px solid ${theme.colorSub};
  transition: 0.4s;

  :hover {
    box-shadow: none;
  }
`;

export const yellowLineButtonStyle = (theme: Theme): SerializedStyles => css`
  background: transparent;
  color: ${theme.colorSub};
  margin-right: 10px;

  ${navButtonStyle(theme)};
`;

export const yellowFullButtonStyle = (theme: Theme): SerializedStyles => css`
  background-color: ${theme.colorSub};
  color: ${theme.colorWhite};

  ${navButtonStyle(theme)};
`;
