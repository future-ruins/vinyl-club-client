import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginFormContainer from './LoginFormContainer';
import SignupFormContainer from './SignupFormContainer';

export default class Homepage extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/signup' component={SignupFormContainer} />
        </main>
      </BrowserRouter>
    );
  }
}