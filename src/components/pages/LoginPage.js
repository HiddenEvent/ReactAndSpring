import React from 'react';
import Login from '../login/Login';

const LoginPage = (props) => {
  console.log('LoginPage', props);
  console.log(props.match.params.id);

  return <Login />;
};

export default LoginPage;
