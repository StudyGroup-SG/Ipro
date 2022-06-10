import { SerializedStyles, Theme, css } from '@emotion/react';
import media from '@/styles/media';

export const titleStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorIndigo};
  font-size: 42px;
  padding-bottom: 5px;

  ${media.small} {
    font-size: 35px;
  }

  ${media.xsmall} {
    font-size: 30px;
  }
`;

export const descriptionStyle = (theme: Theme): SerializedStyles => css`
  color: ${theme.colorGray2};
  font-size: 18px;

  ${media.xsmall} {
    font-size: 16px;
  }
`;
