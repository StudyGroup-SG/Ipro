import { css } from '@emotion/react';
import media from '@/styles/media';

export const titleWrapperStyle = css`
  width: 100%;
  text-align: right;
  margin-top: auto;
`;

export const imageWrapperStyle = css`
  width: 100%;
  text-align: center;
  padding: 50px 0;

  img {
    width: 150%;

    ${media.medium} {
      width: 100%;
    }
  }
`;
