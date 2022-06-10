import { SerializedStyles, Theme, css } from '@emotion/react';

export const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
`;

export const titleStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCodingBold};
  font-size: 50px;
  text-align: center;
  color: ${theme.colorGray1};
  margin-bottom: 10px;

  span {
    color: ${theme.colorPrimaryDark};
  }

  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 50px;
    margin-left: 0.5px;
    margin-bottom: -2px;
    background-color: ${theme.colorPrimaryDark};
  }
`;

export const descStyle = (theme: Theme): SerializedStyles => css`
  font-family: ${theme.fontCoding};
  font-size: 18px;
  text-align: center;
  color: ${theme.colorGray2};
  width: 50%;
  margin-bottom: 3px;
`;
