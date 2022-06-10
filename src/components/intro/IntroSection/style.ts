import { css } from '@emotion/react';
import media from '@/styles/media';

export const introSectionStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 20px 5%;
  margin: 100px 0;
  position: relative;
  z-index: 0;

  ${media.medium} {
    flex-direction: column;
  }
`;
