import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/common/PrivateRoute';
import ErrorBoundary from './components/common/ErrorBoundary';

import Uri from './constants/uri';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ServicePage from './pages/ServicePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import FeedbackMessagePage from './pages/FeedbackMessagePage';

import { useUserStateValue } from './atoms/userState';

const App: FC = () => {
  const user = useUserStateValue();

  const isAuthenticated = !!user;

  return (
    <ErrorBoundary>
      <Switch>
        <Route path={Uri.home} exact component={HomePage} />
        <PrivateRoute
          path={Uri.signup}
          exact
          component={SignupPage}
          isAccessible={!isAuthenticated}
        />
        <PrivateRoute
          path={Uri.signin}
          exact
          component={SigninPage}
          isAccessible={!isAuthenticated}
        />
        <PrivateRoute
          path={Uri.service}
          exact
          component={ServicePage}
          isAccessible={isAuthenticated}
        />
        <Route path={Uri.feedback} exact component={FeedbackMessagePage} />

        <Route component={NotFoundPage} />
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
