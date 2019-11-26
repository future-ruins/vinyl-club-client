import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../actions/user';
import SignupForm from './SignupForm';

class SignupFormContainer extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
  };

  onChange = event => {
    let value = event.target.value;
    if (event.target.name === 'username') {
      value = value.replace(/[^a-zA-Z0-9_.-]/g, '');
    }

    this.setState({
      [event.target.name]: value,
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
          <SignupForm
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

export default connect(mapStateToProps, { signup })(SignupFormContainer);
