import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LoginFormContainer extends Component {
  state = { email: '', password: '' };
  render() {
    return (
      <>
        <LoginForm></LoginForm>
      </>
    );
  }
}

export default LoginFormContainer;
