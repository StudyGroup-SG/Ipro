import React, { ReactElement } from 'react';

import { Global, css } from '@emotion/react';
import D2Coding from '@/assets/fonts/D2Coding.woff';
import D2CodingBold from '@/assets/fonts/D2CodingBold.woff';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  @font-face {
    font-family: 'D2Coding';
    src: url(${D2Coding}) format('woff');
  }

  @font-face {
    font-family: 'D2CodingBold';
    src: url(${D2CodingBold}) format('woff');
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #f4f7ff;
  }

  button {
    cursor: pointer;
    box-sizing: border-box;

    &:disabled {
      cursor: default;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

const GlobalStyle = (): ReactElement => {
  return <Global styles={style} />;
};

export default GlobalStyle;
