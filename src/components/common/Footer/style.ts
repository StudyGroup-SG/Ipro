import { SerializedStyles, Theme, css } from '@emotion/react';

export const footerStyle = (theme: Theme): SerializedStyles => css`
  padding: 10px 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;

  hr {
    width: 100%;
    border: 0;
    border-top: 1px solid ${theme.colorGray3};
    margin-bottom: 20px;
  }

  p {
    margin: 5px 0 20px 0;
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colorGray3};
  }
`;
