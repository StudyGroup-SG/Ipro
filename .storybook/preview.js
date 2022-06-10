import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/global';
import theme from '../src/styles/theme';
import { BrowserRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  ),
];
