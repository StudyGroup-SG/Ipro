import { SerializedStyles, Theme, css } from '@emotion/react';

export const itemBoxStyle = (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  width: 90%;
  height: 100px;
  background: ${theme.colorWhite};
  box-shadow: 1px 3px 20px 3px rgba(0, 83, 191, 0.1);
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
  font-family: ${theme.fontCoding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const itemInfoStyle = css`
  display: flex;
  flex-direction: column;
`;

export const itemInfoTitleStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;

  h3 {
    color: ${theme.colorPrimary};
    font-size: 24px;
    margin-right: 8px;
  }

  span {
    color: ${theme.colorGray3};
    font-size: 16px;
    line-height: 24px;
  }
`;

export const itemInfoDetailStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray1};
  font-size: 14px;
`;

export const removeButtonStyle = css`
  background: none;
  border: none;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 28px;
    height: 28px;
  }
`;
