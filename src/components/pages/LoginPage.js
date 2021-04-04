import React from 'react';
import Login from '../login/Login';

const LoginPage = (props) => {
  console.log('LoginPage', props);
  console.log(props.match.params.id);

  return (
    <div>
      <button onClick={() => props.history.go(-1)}>뒤로가기</button>
      <button onClick={() => props.history.push('/')}>Path지정 이동</button>
      <Login />
    </div>
  );
};

export default LoginPage;
