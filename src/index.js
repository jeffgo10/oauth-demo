import React from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <OAuth2Login
    authorizationUrl="https://www.facebook.com/v14.0/dialog/oauth"
    responseType="token"
    clientId="848288136135865"
    redirectUri="http://primed-mind.localhost/"
    onSuccess={onSuccess}
    onFailure={onFailure}/>,
  document.getElementById('root')
);
