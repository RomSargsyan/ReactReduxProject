import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router';

let Login = (props) => {
  let handleSubmit = (value) => {
    props.login(value.email, value.password, value.rememberMe, value.captcha)
  }

  if (props.isAuth) {
    return <Redirect  to={`/profile/${props.userId}`} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit} {...props} />
    </div>
  )
}

export default Login;
