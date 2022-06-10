import { css, Theme, SerializedStyles } from '@emotion/react';

export const modalWrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const modalInnerStyle = (theme: Theme): SerializedStyles => css`
  width: 500px;
  padding: 25px 15px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${theme.colorWhite};
  cursor: default;
  overflow: hidden;
`;

export const modalMessageStyle = (theme: Theme): SerializedStyles => css`
  padding: 10px 25px 30px 25px;
  color: ${theme.colorGray1};
  font-size: 23px;
  font-family: ${theme.fontCodingBold};
`;

export const modalButtonStyle = (theme: Theme): SerializedStyles => css`
  padding: 10px 25px;
  margin: 0 10px;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 12px;

  :hover {
    background-color: ${theme.colorGray4};
  }
`;

export const modalCancelButtonStyle = (theme: Theme): SerializedStyles =>
  css`
    ${modalButtonStyle(theme)};
    color: ${theme.colorGray2};
  `;

export const modalAcceptButtonStyle = (theme: Theme): SerializedStyles =>
  css`
    ${modalButtonStyle(theme)};
    color: ${theme.colorPrimary};
  `;

export const modalButtonWrapperStyle = css`
  display: flex;
  justify-content: flex-end;
`;
