import React, { PropsWithChildren } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default withRouter(AuthProvider);
