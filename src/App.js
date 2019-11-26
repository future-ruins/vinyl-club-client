import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import logo from './images/headset-24px.svg';
import LoginFormContainer from './components/LoginFormContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <header className='App-header'>
          <Link to='/'>
            <img className='icon' height='40px' alt='app logo' src={logo}></img>
          </Link>
        </header>
        <>
          <Route path='/' exact component={App} />
        </>

        <LoginFormContainer></LoginFormContainer>

        <footer>
          <br />
          <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © Vinyl Club '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </footer>
      </Provider>
    );
  }
}

export default App;
