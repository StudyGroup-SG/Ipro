import React, { FC, useCallback } from 'react';
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom';

type PrivateRouteProps = {
  isAccessible: boolean;
  redirectUrl?: string;
} & RouteProps;

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  path,
  exact,
  isAccessible,
  redirectUrl,
}) => {
  const render = useCallback(
    (props: RouteComponentProps) =>
      isAccessible ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectUrl ?? '/'} />
      ),
    [Component, isAccessible, redirectUrl],
  );

  return <Route path={path} exact={exact} render={render} />;
};

PrivateRoute.defaultProps = {
  redirectUrl: '/',
};

export default PrivateRoute;
