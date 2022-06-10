import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@emotion/react';

import App from './App';
import ConfirmModalRoot from './components/modal/ConfirmModalRoot';
import GlobalStyle from './styles/global';
import SnackbarRoot from './components/modal/SnackbarRoot';
import theme from './styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
        <ConfirmModalRoot />
        <SnackbarRoot />
      </ThemeProvider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
);
