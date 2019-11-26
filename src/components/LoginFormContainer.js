import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

class LoginFormContainer extends Component {
  state = { email: '', password: '' };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    if (this.props.user.jwt) {
      return <Redirect to='/records-board' />;
    } else {
      return (
        <React.Fragment>
          {this.props.user.error && (
            <div className='alert' role='alert'>
              {this.props.user.error}
            </div>
          )}
          <LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
          />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { login })(LoginFormContainer);
